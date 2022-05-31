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

/*=============== KEVSTROSKY CHANGES ===============*/
/*=============== CHANGING IDIOM ===============*/

const idiomButton = document.getElementById('idiom-button');




const english_information = {
    //Header
    profession: "Information Systems Engineering student",
    //Download button
    download: "Download CV <i class="+"ri-download-line"+"></i>", 
    //Filter tabs
    projects:  "Projects",
    skills: "Skills",
    experience: "Experience",
    certifications: "Certifications",
    //Skills title
    skill_1_title: "Frontend development",
    skill_2_title: "Backend development",
    //Skills frontend
    skill_1_level: "Intermediate", //HTML
    skill_2_level: "Beginner", //Javascript
    skill_3_level: "First steps", //Tailwindcss
    skill_4_level: "Intermediate", //CSS
    skill_5_level: "First steps", //Bootstrap
    //Skills backend
    skill_6_level: "Intermediate", //MySQL
    skill_7_level: "Beginner", //Python
    //Footer
    footer: "Site based on the original design of Bedimcode. Edited and modified by Kevstrosky"


}
const spanish_information = {
    //Header
    profession: "Estudiante de Ingeniería en Sistemas de Información",
    //Download button
    download: "Descargar CV <i class="+"ri-download-line"+"></i>", 
    //Filter tabs
    projects:  "Proyectos",
    skills: "Tecnologías",
    experience: "Experiencia",
    certifications: "Certificaciones",
     //Skills title
    skill_1_title: "Desarrollo frontend",
    skill_2_title: "Desarrollo backend",
    //Skills frontend
    skill_1_level: "Intermediario", //HTML
    skill_2_level: "Principiante", //Javascript
    skill_3_level: "Primeros pasos", //Tailwindcss
    skill_4_level: "Intermediario", //CSS
    skill_5_level: "Primeros pasos", //Bootstrap
    //Skills backend
    skill_6_level: "Intermediario", //MySQL
    skill_7_level: "Principiante", //Python
    //Footer
    footer: "Sitio basado en el diseño original de Bedimcode. Editado y modificado por Kevstrosky."

}

idiomButton.addEventListener('click',() => {
    const list = document.querySelector(".change-idiom");
const style = getComputedStyle(list);
const color = style.color;
console.log(color);
    if(color == "rgb(34, 39, 43)" || color == "rgb(241, 242, 244)"){
        document.getElementById('skill_1_title').innerHTML = english_information.skill_1_title;
        document.getElementById('skill_2_title').innerHTML = english_information.skill_2_title;
        document.getElementById('skill_1_level').innerHTML = english_information.skill_1_level;
        document.getElementById('skill_2_level').innerHTML = english_information.skill_2_level;
        document.getElementById('skill_3_level').innerHTML = english_information.skill_3_level;
        document.getElementById('skill_4_level').innerHTML = english_information.skill_4_level;
        document.getElementById('skill_5_level').innerHTML = english_information.skill_5_level;
        document.getElementById('skill_6_level').innerHTML = english_information.skill_6_level;
        document.getElementById('skill_7_level').innerHTML = english_information.skill_7_level;
        document.getElementById('footer').innerHTML = english_information.footer;
        document.querySelector(".change-idiom").style.color = "var(--first-color)";
        document.getElementById('profession').innerHTML = english_information.profession;
        document.getElementById('cv-button').innerHTML = english_information.download;
        document.getElementById('projects-button').innerHTML = english_information.projects;
        document.getElementById('skills-button').innerHTML = english_information.skills;
        document.getElementById('experience-button').innerHTML = english_information.experience;
        document.getElementById('certifications-button').innerHTML = english_information.certifications;


        /*
        for(let i = 1; i <= 1; i++){
            const {skill_1_level} = english_information;
            document.getElementById('skill_'+i+'_level').innerHTML = english_information;
        */

    }

    if(color == "rgb(66, 165, 245)"){
        document.querySelector(".change-idiom").style.color = "var(--title-color)";
        document.getElementById('skill_1_title').innerHTML = spanish_information.skill_1_title;
        document.getElementById('skill_2_title').innerHTML = spanish_information.skill_2_title;

        document.getElementById('skill_1_level').innerHTML = spanish_information.skill_1_level;
        document.getElementById('skill_2_level').innerHTML = spanish_information.skill_2_level;
        document.getElementById('skill_3_level').innerHTML = spanish_information.skill_3_level;
        document.getElementById('skill_4_level').innerHTML = spanish_information.skill_4_level;
        document.getElementById('skill_5_level').innerHTML = spanish_information.skill_5_level;
        document.getElementById('skill_6_level').innerHTML = spanish_information.skill_6_level;
        document.getElementById('skill_7_level').innerHTML = spanish_information.skill_7_level;

        document.getElementById('footer').innerHTML = spanish_information.footer;
        document.getElementById('profession').innerHTML = spanish_information.profession;
        document.getElementById('cv-button').innerHTML = spanish_information.download;
        document.getElementById('projects-button').innerHTML = spanish_information.projects;
        document.getElementById('skills-button').innerHTML = spanish_information.skills;
        document.getElementById('experience-button').innerHTML = spanish_information.experience;
        document.getElementById('certifications-button').innerHTML = spanish_information.certifications;

    }

});

