new_div = document.createElement('div');
new_div.className = 'div_container';
document.body.appendChild(new_div);

let section_right = document.createElement('div');
section_right.className = 'section_right';
new_div.appendChild(section_right);



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
        document.querySelector('.profile_picture').style.filter = "invert(1)";
    }
    else {
        new_div.style.filter = "invert(0)";
        document.querySelector('.profile_picture').style.filter = "invert(0)";
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
        display_home.className = "desplegated_div Home"
        new_div.appendChild(display_home)
        display_home.innerHTML = (`
        <div class="home_exposer">
            <h1>Steven Gomez</h1>
            <div class="home_container">
                <img src="image2.jpg" class="profile_picture">
                <div class="icon_wrapper">
                    <h3>Pasionate with develop and design</h3>
                    <div class="icon_wrapper_2">
                        <a href="https://github.com/stevengomez25"><i class="fa-brands fa-square-github"></i></a>
                        <a href="https://www.facebook.com/stevengomez.0425/?locale=es_LA"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/steven-gómez-49aa87236/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://wa.me/573164187146"><i class="fa-brands fa-square-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `)
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
    } else {
        icono_cambio_home.className = "icon_i fa-solid fa-circle-arrow-left"
        display_home.classList.add("return_div")
        display_home.addEventListener("transitionend", () => {
            display_home.remove()
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
        display_technologies.innerHTML = `
        <div class="technologies_exposer"> Holi</div>
        `
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
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
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
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
        display_studies.innerHTML =`
        
            
                <div class="studies_container studies_1">
                    <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
                    <div class="studies_text_container">
                        <h1>JOSE ELIAS PUYANA</h1>
                        <h3>Bachiller con promoción anticipada 2013-2020</h3>
                    </div>
                </div>
                <div class="studies_container studies_2">
                    <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
                    <div class="studies_text_container">
                        <h1>Servicio Nacional de Aprendizaje SENA</h1>
                        <h3>Análisis y desarrollo de Software 2023-actualmente</h3>
                    </div>
                </div>
            

                <div class="studies_container studies_3">
                    <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
                        <div class="studies_text_container">
                            <h1>UDEMY</h1>
                            <h3>Múltiples cursos orientados a la programación <br>2022-actualmente</h3>
                        </div>
                </div>
                <div class="studies_container studies_4">
                <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">

                    <div class="studies_text_container">
                        <h1>CISCO</h1>
                        <h3>Fundamentos de python, proyectos y consolidación de nivel JR 2023</h3>
                    </div>
                </div>
                <div class="studies_container studies_5">
                    <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
                    <div class="studies_text_container">
                        <h1>LINKEDIN</h1>
                        <h3>Fundamentos de python, proyectos y consolidación de nivel JR 2023</h3>
                    </div>
                </div>

        `
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
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
        display_experience.innerHTML = `
        <div class="experience_exposer">
            <ul class="list_options">
                <li><button class="pestaña_1">Pestaña 1</button></li>
                <li><button class="pestaña_2">Pestaña 2</button></li>
                <li><button class="pestaña_3">Pestaña 3</button></li>
                <li><button class="pestaña_4">Pestaña 4</button></li>
                <li><button class="pestaña_5">Pestaña 5</button></li>
                <li><button class="pestaña_6">Pestaña 6</button></li>
                <li><button class="pestaña_7">Pestaña 7</button></li>
            </ul>
            <div class="main_container_proyect"><iframe width="700" height="400" src="https://www.youtube.com/embed/RE87rQkXdNw?si=s9aSi0XLaUWCuF8t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>`
        colors = ['red','blue','yellow','green','black','orange','purple']
        content = [`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_1"><a href="#">Visitar proyecto</a></button>
        </div>
        `,`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_2"><a href="#">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_3"><a href="#">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 4</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_4"><a href="#">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 5</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_5"><a href="#">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 6</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_6"><a href="#">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
            <img src="https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png">
        </div>
        <div class="exposer_right">
            <h1>Proyecto 7</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, eu luctus nascetur sociis ornare sed turpis, scelerisque fringilla tempor pulvinar fusce suscipit egestas. Class et potenti varius aenean scelerisque duis rhoncus nulla, egestas at per porttitor inceptos tellus vitae parturient, himenaeos ut nullam aptent pretium nisl mauris. Natoque class curae velit lacinia suscipit primis ridiculus, vulputate mattis bibendum molestie volutpat egestas etiam, torquent est purus ultricies interdum nostra.

            Sociosqu dictumst aliquam phasellus libero platea pulvinar quisque, facilisi eleifend lacinia hac lacus netus ultricies morbi, sociis tempus leo ultrices primis nisl. Ultricies nibh maecenas eu litora ridiculus tristique lacinia interdum sollicitudin in dignissim varius ullamcorper, fusce blandit vestibulum non pharetra faucibus cursus himenaeos arcu mi morbi. Porttitor magna viverra orci eros habitant parturient ac convallis auctor donec bibendum urna, facilisi ultrices nisi nascetur ridiculus cum aliquet tortor risus turpis.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
            </select>
            <button class="proyect_redirecter proyect_7"><a href="#">Visitar proyecto</a></button>
        </div>`]
        colors.map((e)=>{
            document.querySelector(`.pestaña_${colors.indexOf(e)+1}`).addEventListener("click",()=>{
                document.querySelectorAll(".activated").forEach((e)=>{e.classList.remove("activated")})
                document.querySelector(`.pestaña_${colors.indexOf(e)+1}`).classList.add("activated")
                expositor = document.querySelector('.main_container_proyect')
                expositor.style.background = e;
                if(e==='black' || e==='purple' || e==='blue'){expositor.style.color='white'}
                else{expositor.style.color='black'}
                expositor.innerHTML = content[colors.indexOf(e)];
        })

        
        })
        pestana_2 = document.querySelector('.pestaña_2');
        pestana_2.addEventListener("click",()=>{
            expositor = document.querySelector('.main_container_proyect')
            expositor.style.background = 'blue';
        })

        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
    } else {
        icono_cambio_experience.className = "icon_i fa-solid fa-circle-arrow-left"
        display_experience.classList.add("return_div")
        display_experience.addEventListener("transitionend",()=>{
            display_experience.remove()
    })
}})

//Experience logica

