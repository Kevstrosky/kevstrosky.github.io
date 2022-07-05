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
    2: "Information Systems Engineering student",
    3: "Download CV <i class="+"ri-download-line"+"></i>", 
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
    18: "Project manager"

}

const spanish_information = {
    1: "Kevin Ochoa - Portafolio",
    2: "Estudiante de Ingeniería en Sistemas de Información",
    3: "Descargar CV <i class="+"ri-download-line"+"></i>", 
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
    18: "Líder de proyecto"

}
function copy() {
    let copyText = document.getElementById("cert-id").innerText;

    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
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


     
    }

});

