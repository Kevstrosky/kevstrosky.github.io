/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__email`, {delay: 700})
sr.reveal(`.profile__social`, {delay: 800})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 900})
sr.reveal(`.filters__content`, {delay: 1000})
sr.reveal(`.filters`, {delay: 1100})
sr.reveal(`.footer__copy`, {delay: 800})

/*=============== CHANGING LANGUAJE ===============*/

const idiomButton = document.getElementById('idiom-button');


/*=============== Reminder: Change this object to an external JSON ===============*/

const english_information = {
    1: "Kevin Ochoa - Portfolio",
    2: "Software Engineer",
    3: "Download CV (english version) <i class="+"ri-download-line"+"></i>", 
    4: "Projects",
    5: "Skills",
    6: "Experience",
    7: "Certifications",
    8: "Website",
    9: "Corporate website developed for the company Nortec Seguridad.",
    10: "Web application",
    11: "Sislab | In development",
    12: "System for requesting laboratories of the University of Sonora.",
    13: "Frontend development",
    14: "Advanced",
    15: "Intermediate",
    16: "First steps",
    17: "First steps",
    18: "Intermediate",
    19: "Intermediate",
    20: "Beginner",
    21: "Backend development",
    22: "Intermediate",
    23: "First steps",
    24: "Intermediate",
    25: "Beginner",
    26: "Beginner",
    27: "Tools",
    28: "Intermediate",
    29: "Intermediate",
    30: "Advanced",
    31: "Intermediate",
    32: "Beginner",
    33: "Software QA",
    34: "Beginner",
    35: "Beginner",
    36: "Software Developer",
    37: "CSI PRO | University of Sonora",
    38: "March 2022 - Present",
    39: "I am currently the leader and developer of the project "+'"Digitalization and automation of forms for internal laboratory procedures" '+ "of the Department of Biological Chemical Sciences at the University of Sonora.",
    40: "A web application that allows teachers to make requests for laboratories, reagents and equipment for the practices carried out by students.<br><br>Technologies:<br>• HTML5, CSS3, Javascript, Mongodb, Express.js, React.js and Node.js<br><br>Project documentation and Sofware QA.<br>• Confluence, Jira, Gitlab, Figma and Unit testing.",
    41: "IT Specialist",
    42: "June 2021 - March 2023",
    43: "I provide services and consultancies on information technology for companies and individuals. In addition to selling and offering solutions with the use of technology.<br><br> Repair and maintenance of:<br> • Desktop computers, laptops, inkjet and laser printers. <br> <br> Configuration and installation of: <br> • Servers, antennas, time attendance devices and telephony<br><br>Other functions:<br>• Provide advice and training.<br>• Assemble desktop computers",
    44: "Network Technician",
    45: "January 2020 - January 2021",
    46: "I developed within the company as a technician in electronic security and telecommunications providing services to large companies such as Caffenio, Leoni, Construplan, among others. <br><br>I was also in charge of the marketing area, making mailing plans, web development of the company's website and being community manager.<br><br>Implementation and configuration of:<br>• IP/Analog video surveillance systems, access control, time attendance devices and antennas.<br>• Structured cabling, rack organization, channeling and development of telecommunications rooms. <br>• IP assignments to devices.<br><br>Documentation and training:<br>• • Documentation of engineering work.<br>• Training to end users. finales.<br><br>Marketing and web development.<br>• Development and implementation of the corporate website with Wix.<br>• Photography and editing of the work portfolio.<br>• Mailling<br>• Design of the graphic elements<br>• Community manager<br>• Advertising campaigns<br>",
    47: "Certifications",
    48: "Courses",
    49: "Introduction to Web Development I (40h) - Google Actívate",
    50: "Verify certificate"+'<i class="ri-link-m"></i>',
    51: "Introduction to Web Development II (40h) - Google Actívate",
    52: "Verify certificate"+'<i class="ri-link-m"></i>',
    53: "Introduction to Web development with HTML, CSS, JavaScript - IBM",
    54: "Verify certificate"+'<i class="ri-link-m"></i>',
    55: "Technical Support Fundamentals - Google",
    56: "Verify certificate"+'<i class="ri-link-m"></i>',
    57: " &#169; Site based on Bedimcode's original design. Edited and modified by Kevstrosky. Updated on May 8, 2023.",
    58: "Software engineer",
    59: "Hospital San Diego de Alcalá",
    60: "May 2023 - Present",
    61: "I am currently in the Software Engineering team developing the project "+'"Electronic Health Records"'+" for the internal processes of the hospital in the position of Front End developer. I am involved in the collection and analysis of requirements as well as software architecture modeling. <br> <br> Technologies: <br> • HTML5, CSS3, React + Vite and Typescript <br> <br> Project documentation: <br> • Figma y Github <br> <br>",
    62: "Jr software engineer",
    63: "Tepache labs",
    64: "March 2023 - May 2023",
    65: "During my internship I developed the Culto al Perro Café website on the Front End side. I also developed an API that uploads videos to an Amazon Web Services bucket. <br> <br> Technologies: <br> • HTML5, CSS3, Typescript, React, Remix, Hydrogen + Oxygen de Shopify, Storybook, Styled Components, Eslint and Amazon Web Services. <br> <br>"

}

const spanish_information = {
    1: "Kevin Ochoa - Portafolio",
    2: "Ingeniero de Software",
    3: "Descargar CV (versión en español) <i class="+"ri-download-line"+"></i>", 
    4: "Proyectos",
    5: "Tecnologías",
    6: "Experiencia",
    7: "Certificaciones",
    8: "Sitio web",
    9: "Sitio web corporativo desarrollado para la empresa Nortec Seguridad.",
    10: "Aplicacion web",
    11: "Sislab | En desarrollo",
    12: "Sistema para solicitud de laboratorios de la Universidad de Sonora.",
    13: "Desarrollo frontend",
    14: "Avanzado",
    15: "Intermedio",
    16: "Primeros pasos",
    17: "Primeros pasos",
    18: "Intermedio",
    19: "Intermedio",
    20: "Principiante",
    21: "Desarrollo backend",
    22: "Intermedio",
    23: "Primeros pasos",
    24: "Intermedio",
    25: "Principiante",
    26: "Principiante",
    27: "Herramientas",
    28: "Intermedio",
    29: "Intermedio",
    30: "Avanzado",
    31: "Intermedio",
    32: "Principiante",
    33: "QA del software",
    34: "Principiante",
    35: "Principiante",
    36: "Desarrollador de software",
    37: "CSI PRO | Universidad de Sonora",
    38: "Marzo 2022 - Actualidad",
    39: "Actualmente soy líder y desarrollador del proyecto "+'"Digitalización y automatización de formularios para los procedimientos internos de los laboratorios "'+ "del departamento de Ciencias Químico Biológicasde la Universidad de Sonora.",
    40: "Una aplicación web que permite a los maestros realizar solicitudes de laboratorios, reactivos y equipos para las prácticas que realizan los alumnos.<br><br>Tecnologías:<br>• HTML5, CSS3, Javascript, Mongodb, Express.js, React.js y Node.js<br><br>Documentación de proyecto y QA del Software.<br>• Confluence, Jira, Gitlab, Figma y pruebas unitarias.",
    41: "Técnico de TI",
    42: "Junio 2021 - Marzo 2023",
    43: "Presto servicios y asesorías sobre tecnologías de información para empresas y particulares. Además de vender y ofrecer soluciones con el uso de tecnología. <br><br> Reparación y mantenimiento de: <br> • Computadoras de escritorio, computadoras portátiles, impresoras de inyección de tinta y láser. <br> <br> Configuración e instalación de: <br> • Servidores, antenas, checadores y telefonía.<br><br>Otras funciones:<br>• Brindar asesorías y capacitaciones.<br>• Armar computadores de escritorio",
    44: "Técnico de redes",
    45: "Enero 2020 - Enero 2021",
    46: "Me desarrollé dentro de la empresa como técnico en seguridad electrónica y telecomunicaciones brindando servicios a grandes empresas como Caffenio, Leoni, Construplan, entre otras.<br><br>También estuve a cargo del área de marketing, realizando planes de mailing, desarrollo webdel sitio web de la empresa y siendo community manager.<br><br>Implementación y configuración de:<br>• Sistemas de videovigilancia IP/Análogos, control de acceso, checadores y antenas.<br>• Cableado estructurado, organización de rack, canalización y desarrollo de cuartos detelecomunicaciones.<br>• Asignamientos de IP a dispositivos.<br><br>Documentación y capaciones:<br>• Documentación del trabajo de ingeniería.<br>• Capacitaciones y asesorías a usuarios finales.<br><br>Marketing y desarrollo web.<br>• Desarrolllo e implementación de la página web corporativa con Wix.<br>• Fotografía y edición del portafolio de trabajo.<br>• Mailling<br>• Diseño de elementos gráficos<br>• Community manager<br>• Campañas de publicidad<br>",
    47: "Certificaciones",
    48: "Cursos",
    49: "Introducción al Desarrollo Web I (40h) - Google Actívate",
    50: "Verificar certificado"+'<i class="ri-link-m"></i>',
    51: "Introducción al Desarrollo Web II (40h) - Google Actívate",
    52: "Verificar certificado"+'<i class="ri-link-m"></i>',
    53: "Introducción al desarrollo web con HTML, CSS, JavaScript - IBM",
    54: "Verificar certificado"+'<i class="ri-link-m"></i>',
    55: "Aspectos básicos de la asistencia técnica - Google",
    56: "Verificar certificado"+'<i class="ri-link-m"></i>',
    57: "&#169; Sitio basado en el diseño original de Bedimcode. Editado y modificado por Kevstrosky. Actualizado el 8 de mayo del 2023.",
    58: "Ingeniero de software",
    59: "Hospital San Diego de Alcalá",
    60: "Mayo 2023 - Actualidad",
    61: "Actualmente estoy en el equipo de Ingeniería de Software desarrollando el proyecto "+'Sistema Integral del Expediente Clínico Electrónico'+"+para los procesos internos del hospital en la posición de desarrollador Front End. Estoy involucrado en la recopilación y análisis de requerimientos además del modelado de la arquitectura del software. <br> <br> Tecnologías: <br> • HTML5, CSS3, React + Vite y Typescript <br> <br> Documentación del proyecto <br> • Figma y Github <br> <br>",
    62: "Ingeniero de software jr",
    63: "Tepache labs",
    64: "Marzo 2023 - Mayo 2023",
    65: "Desarrollé en mi estancia de prácticas el sitio web de Culto al Perro Café del lado del Front End. Además desarrollé una API que sube vídeos a un bucket de Amazon Web Services. <br> <br> Tecnologías: <br> • HTML5, CSS3, Typescript, React, Remix, Hydrogen + Oxygen de Shopify, Storybook, Styled Components, Eslint y Amazon Web Services. <br> <br>"
}


function copy(idcert) {
    let certText = document.getElementById(idcert).innerText;
    let arr = certText.split(" ");
        let copyText = arr[arr.length-3]+" "+arr[arr.length-2]+" "+arr[arr.length-1];
    navigator.clipboard.writeText(copyText);
    alert(copyText);
  }


idiomButton.addEventListener('click',() => {
    const list = document.querySelector(".change-idiom");
const style = getComputedStyle(list);
const color = style.color;
console.log(color);
    if(color == "rgb(34, 39, 43)" || color == "rgb(241, 242, 244)"){
        document.querySelector(".change-idiom").style.color = "var(--first-color)";

        for(let i = 1; i <= Object.keys(english_information).length; i++){
            document.getElementById(i).innerHTML = english_information[i];
        }
        $("#3").attr('href', 'assets/pdf/Kevin_Ochoa_Resume.pdf');


        $('.notification').removeClass("hideon");
        $('.notification').removeClass("hide");
        $('.notification').addClass("show");
        $('.s-notification').removeClass("show");
        $('.s-notification').addClass("hide");
        setTimeout(function(){
        $('.notification').removeClass("show");
        $('.notification').addClass("hide");
        },2000);

        $("#sislab").attr('src', 'assets/img/project2-EN.jpg');



    }

    if(color == "rgb(66, 165, 245)"){
        document.querySelector(".change-idiom").style.color = "var(--title-color)";

        for(let i = 1; i <= Object.keys(spanish_information).length; i++){
            document.getElementById(i).innerHTML = spanish_information[i];
        }
        $("#3").attr('href', 'assets/pdf/Kevin_Ochoa_CV.pdf');

        $('.s-notification').removeClass("hideon");
        $('.s-notification').removeClass("hide");
        $('.s-notification').addClass("show");
        $('.notification').removeClass("show");
        $('.notification').addClass("hide");
        setTimeout(function(){
        $('.s-notification').removeClass("show");
        $('.s-notification').addClass("hide");
        },2000);

        $("#sislab").attr('src', 'assets/img/project2.jpg');



     
    }

});

