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

/*=============== KEVSTROSKY CHANGES ===============*/
/*=============== CHANGING IDIOM ===============*/

const idiomButton = document.getElementById('idiom-button');

const english_information = {
    1: "Kevin Ochoa - Portfolio",
    2: "Software Engineering student",
    3: "Download CV (english version) <i class="+"ri-download-line"+"></i>", 
    4: "Projects",
    5: "Skills",
    6: "Experience",
    7: "Certifications",
    8: "Frontend development",
    9: "Backend development",
    10: "Intermediate", 
    11: "Beginner", 
    12: "First steps", 
    13: "Intermediate", 
    14: "First steps", 
    15: "Intermediate", 
    16: "Beginner", 
    17: "Site based on the original design of Bedimcode. Edited and modified by Kevstrosky",
    18: "Project Manager",
    19: "University of Sonora",
    20: "March 2022 - Present",
    21: "I’m currently Project Manager of the project"+'" Digitization and automationof forms for internal laboratory procedures"'+ "for the Department ofChemical Biological Sciences.",
    22: "A web application that allows teachers to make requests for laboratories, reactives and equipment for the practices carried out by students.",
    23: "IT Specialist",
    24: "June 2021 - Present",
    25: "I provide information technology services and consultancies for companies and individuals. Such as repair of computer equipment like desktop computers, laptops and printers. Also in the installation of time attendance devices, servers, antennas and telephony. I provide advice and training to the users. I build desktop computers, from looking at component compatibility to getting the gear ready",
    26: "Network Technician",
    27: "January 2020 - January 2021",
    28: "I developed within the company in the area of electronic security and telecommunications. Mainly in the implementation and configuration of the devices that are integrated in the different companies of the industrial and commercial sector. Devices such as video surveillance cameras, antennas and access controls.",
    29: "I also worked in various telecommunications rooms of various companies, performing maintenance and structured cabling of these.",
    30: "Tools",
    31: "Beginner", 
    32: "Intermediate", 
    33: "Beginner",
    34: "Web page",
    35: "Web application",
    36: "Sislab - in development",
    37: "Certifications",
    38: "Courses",
    39: "Introduction to Web Development I (40h) - Google Actívate",
    40: "Verify certificate <i class="+"ri-link-m"+"></i>",
    41: "Verify certificate <i class="+"ri-link-m"+"></i>",
    42: "Introduction to Web Development with HTML, CSS, JavaScript - IBM",
    43: "Verify certificate <i class="+"ri-link-m"+"></i>",
    44: "Introduction to Web Development II (40h) - Google Actívate",
    45: "A web application that allows teachers to make requests for laboratories, reactives and equipment for the practices carried out by students.",
    46: "Technical Support Fundamentals - Google",
    47: "Verify certificate <i class="+"ri-link-m"+"></i>"

    





}

const spanish_information = {
    1: "Kevin Ochoa - Portafolio",
    2: "Estudiante de Ingeniería de Software",
    3: "Descargar CV (versión en español) <i class="+"ri-download-line"+"></i>", 
    4: "Proyectos",
    5: "Tecnologías",
    6: "Experiencia",
    7: "Certificaciones",
    8: "Desarrollo frontend",
    9: "Desarrollo backend",
    10: "Intermediario", 
    11: "Principiante", 
    12: "Primeros pasos", 
    13: "Intermediario", 
    14: "Primeros pasos",
    15: "Intermediario", 
    16: "Principiante", 
    17: "Sitio basado en el diseño original de Bedimcode. Editado y modificado por Kevstrosky.",
    18: "Líder de proyecto",
    19: "Universidad de Sonora",
    20: "Marzo 2022 - Actualidad",
    21: "Actualmente soy líder del proyecto"+'" Digitalización y automatización de formularios para los procedimientos internos de los laboratorios "'+"del departamento de Ciencias Químico Biológicas.",
    22: "Una aplicación web que permite a los maestros realizar solicitudes de laboratorios, reactivos y equipos para las prácticas que realizan los alumnos.",
    23: "Técnico de TI",
    24: "Junio 2021 - Actualidad",
    25: "Presto servicios y asesorías de tecnologías de información para empresas y particulares. Tales como reparación de equipos de cómputo como computadoras de escritorio, laptops e impresoras. También en la instalación de checadores, servidores, antenas y telefonía. Brindo asesorías y capacitaciones. Construyo computadoras de escritorio, desde la búsqueda entre compatibilidad de los componentes hasta tener listo el equipo.",
    26: "Técnico en redes",
    27: "Enero de 2020 - Enero de 2021",
    28: "Me desarrollé dentro de la empresa como técnico en seguridad electrónica y telecomunicaciones. La actividad principal que realizaba, era implementar, configurar y documentar la instalación de dispositivos electrónicos para empresas del sector industrial y comercial. Dispositivos tales como cámaras de videovigilancia, antenas y controles de acceso.",
    29: "También estuve en el desarrollo de diversos cuartos de telecomunicaciones para empresas realizando labores como el mantenimiento y cableado estructurado de estos.",
    30: "Herramientas",
    31: "Principiante",
    32: "Intermediario",
    33: "Principiante",
    34: "Página web",
    35: "Aplicación web",
    36: "Sislab - en desarrollo",
    37: "Certificaciones",
    38: "Cursos",
    39: "Introducción al Desarrollo Web I (40h) - Google Actívate",
    40: "Verificar certificado <i class="+"ri-link-m"+"></i>",
    41: "Verificar certificado <i class="+"ri-link-m"+"></i>",
    42: "Introducción al desarrollo web con HTML, CSS, JavaScript - IBM",
    43: "Verificar certificado <i class="+"ri-link-m"+"></i>",
    44: "Introducción al Desarrollo Web II (40h) - Google Actívate",
    45: "Una aplicación web que permite a los maestros realizar solicitudes de laboratorios, reactivos y equipos para las prácticas que realizan los alumnos.",
    46: "Aspectos básicos de la asistencia técnica - Google",
    47: "Verificar certificado <i class="+"ri-link-m"+"></i>"



    
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
        $("#3").attr('href', 'assets/pdf/Kevin Ochoa-CV-English.pdf');


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
        $("#3").attr('href', 'assets/pdf/Kevin Ochoa-CV-Español.pdf');

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

