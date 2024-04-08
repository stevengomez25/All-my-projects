new_div = document.createElement('div');
new_div.className = 'div_container';
document.body.appendChild(new_div);

let section_right = document.createElement('div');
section_right.className = 'section_right';
new_div.appendChild(section_right);

let search_bar = document.createElement('form');
search_bar.className = 'search_bar';
section_right.appendChild(search_bar);

i = document.createElement('i');
i.className = "icon_element fa-brands fa-searchengin fa-rotate-90"
search_bar.appendChild(i);

input_search = document.createElement('input');
input_search.className = 'search_input';
input_search.placeholder = "Search";
search_bar.appendChild(input_search);

button_container = document.createElement('div');
button_container.className = "button_container";
section_right.appendChild(button_container);

dot_changer = document.createElement('label');
dot_changer.className = "switch";
button_container.appendChild(dot_changer);

input_switcher = document.createElement('input');
input_switcher.type = "checkbox";
dot_changer.appendChild(input_switcher);

span_switcher = document.createElement('span');
span_switcher.className = "slider";
dot_changer.appendChild(span_switcher);


input_switcher.addEventListener("change", function () {
    if (this.checked) {
        new_div.style.filter = "invert(1)";
    }
    else {
        new_div.style.filter = "invert(0)";
    }
})


buttons_container_mayor = document.createElement('div');
buttons_container_mayor.className = "buttons_container_mayor";
section_right.appendChild(buttons_container_mayor);

section = document.createElement('div');
section.className = "section home";
buttons_container_mayor.appendChild(section);
content_letter = document.createElement('a');
content_letter.className = "container_text";
section.appendChild(content_letter);
content_letter.innerHTML = "Home";

icon_section_div = document.createElement('div');
icon_section_div.className = "icon_section_div";
section.appendChild(icon_section_div);

icon_section_i = document.createElement('i');
icon_section_i.className = "icon_i fa-solid fa-circle-arrow-left";
icon_section_div.appendChild(icon_section_i);


section = document.createElement('div');
section.className = "section Technologies";
buttons_container_mayor.appendChild(section);
content_letter = document.createElement('a');
content_letter.className = "container_text";
section.appendChild(content_letter);
content_letter.innerHTML = "Technologies";

icon_section_div = document.createElement('div');
icon_section_div.className = "icon_section_div";
section.appendChild(icon_section_div);

icon_section_i = document.createElement('i');
icon_section_i.className = "icon_i fa-solid fa-circle-arrow-left";
icon_section_div.appendChild(icon_section_i);


section = document.createElement('div');
section.className = "section About_me";
buttons_container_mayor.appendChild(section);
content_letter = document.createElement('a');
content_letter.className = "container_text";
section.appendChild(content_letter);
content_letter.innerHTML = "About me";

icon_section_div = document.createElement('div');
icon_section_div.className = "icon_section_div";
section.appendChild(icon_section_div);

icon_section_i = document.createElement('i');
icon_section_i.className = "icon_i fa-solid fa-circle-arrow-left";
icon_section_div.appendChild(icon_section_i);

section = document.createElement('div');
section.className = "section Studies";
buttons_container_mayor.appendChild(section);
content_letter = document.createElement('a');
content_letter.className = "container_text";
section.appendChild(content_letter);
content_letter.innerHTML = "Studies";

icon_section_div = document.createElement('div');
icon_section_div.className = "icon_section_div";
section.appendChild(icon_section_div);

icon_section_i = document.createElement('i');
icon_section_i.className = "icon_i fa-solid fa-circle-arrow-left";
icon_section_div.appendChild(icon_section_i);

section = document.createElement('div');
section.className = "section Experience";
buttons_container_mayor.appendChild(section);
content_letter = document.createElement('a');
content_letter.className = "container_text";
section.appendChild(content_letter);
content_letter.innerHTML = "Experience";

icon_section_div = document.createElement('div');
icon_section_div.className = "icon_section_div";
section.appendChild(icon_section_div);

icon_section_i = document.createElement('i');
icon_section_i.className = "icon_i fa-solid fa-circle-arrow-left";
icon_section_div.appendChild(icon_section_i);

//MOVEMENT PAGE

let home = document.querySelector(".home");
let technologies = document.querySelector(".Technologies");
let About_me = document.querySelector(".About_me");
let Studies = document.querySelector(".Studies")
let Experience = document.querySelector(".Experience")

function check_status(first_variable, second_variable,third_variable, fourth_variable) {
    if (first_variable.className == "icon_i fa-solid fa-circle-check"){
            first_variable.className = "icon_i fa-solid fa-circle-arrow-left"
        }
        else if(second_variable.className == "icon_i fa-solid fa-circle-check"){
            second_variable.className = "icon_i fa-solid fa-circle-arrow-left"
            
        }
        else if (third_variable.className == "icon_i fa-solid fa-circle-check"){
            third_variable.className = "icon_i fa-solid fa-circle-arrow-left"
        }
        else if (fourth_variable.className == "icon_i fa-solid fa-circle-check"){
            fourth_variable.className = "icon_i fa-solid fa-circle-arrow-left"
        }
    }

let container_1 = home.querySelector(".icon_section_div")
let icono_cambio_home = container_1.querySelector(".icon_i")
let container_2 = technologies.querySelector(".icon_section_div")
let icono_cambio_technologies = container_2.querySelector(".icon_i")
let container_3 = About_me.querySelector(".icon_section_div")
let icono_cambio_about = container_3.querySelector(".icon_i")
let container_4 = Studies.querySelector(".icon_section_div")
let icono_cambio_studies = container_4.querySelector(".icon_i")
let container_5 = Experience.querySelector(".icon_section_div")
let icono_cambio_experience = container_5.querySelector(".icon_i")


home.addEventListener("click", () => {
    if (icono_cambio_home.className != "icon_i fa-solid fa-circle-check") {
        icono_cambio_home.className = "icon_i fa-solid fa-circle-check"
        check_status(icono_cambio_about,icono_cambio_experience,icono_cambio_studies,icono_cambio_technologies)
        display_home = document.createElement('div')
        display_home.className = "desplegated_div home"
        new_div.appendChild(display_home)
        display_home.innerHTML = "testeando el despliegue "
    } else {
        icono_cambio_home.className = "icon_i fa-solid fa-circle-arrow-left"
        display_home.classList.add("return_div")
        display_home.addEventListener("transitionend", () => {
            display_home.remove()
            try{display_technologies.remove()}catch{() => {console.log("Error removing technologies")}}
            try{display_technologies.remove()}catch{() => {console.log("Error removing technologies")}}
        })
    }
})

technologies.addEventListener("click", () => {
    if (icono_cambio_technologies.className != "icon_i fa-solid fa-circle-check") {
        icono_cambio_technologies.className = "icon_i fa-solid fa-circle-check"
        check_status(icono_cambio_about,icono_cambio_experience,icono_cambio_studies,icono_cambio_home)
        display_technologies = document.createElement('div')
        display_technologies.className = "desplegated_div technologies"
        new_div.appendChild(display_technologies)
        display_technologies.innerHTML = "Testeando segunda pagina"
    } else {
        icono_cambio_technologies.className = "icon_i fa-solid fa-circle-arrow-left"
        display_technologies.classList.add("return_div")
        display_technologies.addEventListener("transitionend",()=>{
            display_technologies.remove()
        })
    }
})

About_me.addEventListener("click", () => {
    if (icono_cambio_about.className != "icon_i fa-solid fa-circle-check") {
        icono_cambio_about.className = "icon_i fa-solid fa-circle-check"
        check_status(icono_cambio_home,icono_cambio_experience,icono_cambio_studies,icono_cambio_technologies)
        display_aboutMe = document.createElement('div')
        display_aboutMe.className = "desplegated_div about_me"
        new_div.appendChild(display_aboutMe)
        display_aboutMe.innerHTML = "Testeando segunda página"
    } else {
        icono_cambio_about.className = "icon_i fa-solid fa-circle-arrow-left"
        display_aboutMe.classList.add("return_div")
        display_aboutMe.addEventListener("transitionend",()=>{
            display_aboutMe.remove()
        })
    }
})

Studies.addEventListener("click", () => {
    if (icono_cambio_studies.className != "icon_i fa-solid fa-circle-check") {
        icono_cambio_studies.className = "icon_i fa-solid fa-circle-check"
        check_status(icono_cambio_about,icono_cambio_experience,icono_cambio_home,icono_cambio_technologies)
        display_studies = document.createElement('div')
        display_studies.className = "desplegated_div studies"
        new_div.appendChild(display_studies)
        display_studies.innerHTML = "Testeando pagina estudios"
    } else {
        icono_cambio_studies.className = "icon_i fa-solid fa-circle-arrow-left"
        display_studies.classList.add("return_div")
        display_studies.addEventListener("transitionend",()=>{
            display_studies.remove()
    })
}})

Experience.addEventListener("click", () => {
    if (icono_cambio_experience.className != "icon_i fa-solid fa-circle-check") {
        icono_cambio_experience.className = "icon_i fa-solid fa-circle-check"
        check_status(icono_cambio_about,icono_cambio_home,icono_cambio_studies,icono_cambio_technologies)
        display_experience = document.createElement('div')
        display_experience.className = "desplegated_div experience"
        new_div.appendChild(display_experience)
        display_experience.innerHTML = "Testeando página Experiencia"
    } else {
        icono_cambio_experience.className = "icon_i fa-solid fa-circle-arrow-left"
        display_experience.classList.add("return_div")
        display_experience.addEventListener("transitionend",()=>{
            display_experience.remove()
    })
}})


