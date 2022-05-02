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
    profession: "Information Systems Engineering student",
    download: "Download CV <i class="+"ri-download-line"+"></i>", 
    projects:  "Projects",
    skills: "Skills",
    experiencie: "Experience",
    certifications: "Certifications"
}
const spanish_information = {
    profession: "Estudiante de Ingeniería en Sistemas de Información",
    download: "Descargar CV <i class="+"ri-download-line"+"></i>", 
    projects:  "Proyectos",
    skills: "Tecnologías",
    experiencie: "Experiencia",
    certifications: "Certificaciones"
}

idiomButton.addEventListener('click',() => {
    const list = document.querySelector(".change-idiom");
const style = getComputedStyle(list);
const color = style.color;
console.log(color);
    if(color == "rgb(34, 39, 43)" || color == "rgb(241, 242, 244)"){
        document.querySelector(".change-idiom").style.color = "var(--first-color)";
        document.getElementById('profession').innerHTML = english_information.profession;
        document.getElementById('cv-button').innerHTML = english_information.download;
        document.getElementById('projects-button').innerHTML = english_information.projects;
        document.getElementById('skills-button').innerHTML = english_information.skills;
        document.getElementById('experiencie-button').innerHTML = english_information.experiencie;
        document.getElementById('certifications-button').innerHTML = english_information.certifications;
    }

    if(color == "rgb(66, 165, 245)"){
        document.querySelector(".change-idiom").style.color = "var(--title-color)";
        document.getElementById('profession').innerHTML = spanish_information.profession;
        document.getElementById('cv-button').innerHTML = spanish_information.download;
        document.getElementById('projects-button').innerHTML = spanish_information.projects;
        document.getElementById('skills-button').innerHTML = spanish_information.skills;
        document.getElementById('experiencie-button').innerHTML = spanish_information.experiencie;
        document.getElementById('certifications-button').innerHTML = spanish_information.certifications;
    }

});


/*document.getElementById('profession').innerHTML = english_information.profession;
        document.getElementById('cv-button').innerHTML = english_information.download;
        document.getElementById('projects-button').innerHTML = english_information.projects;
        document.getElementById('skills-button').innerHTML = english_information.skills;
        document.getElementById('experiencie-button').innerHTML = english_information.experiencie;
        document.getElementById('certifications-button').innerHTML = english_information.certifications;
        document.querySelector(".change-idiom").style.color = "var(--first-color)";
        document.body.classList.toggle(spanishIdiom)
        */