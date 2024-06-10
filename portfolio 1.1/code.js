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
        try{
            document.querySelector('.profile_picture').style.filter = "invert(1)";
        }catch(e){
            console.log(e)
        }
    }
    else {
        new_div.style.filter = "invert(0)";
        try{
            document.querySelector('.profile_picture').style.filter = "invert(0)";
        }catch(e){
            console.log(e)
        }
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
content_letter.innerHTML = "Inicio";

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
content_letter.innerHTML = "Tecnologías";

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
content_letter.innerHTML = "Acerca de mi";

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
content_letter.innerHTML = "Estudios";

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
content_letter.innerHTML = "Experiencia";

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
                    <h3>Apasionado por el desarrollo y el diseño de software</h3>
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
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
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
        <div class="menu">
            <div class="toggle"><i class="fa-solid fa-microchip"></i></div>
            <li style="--i:0;" class="displayer_html">
                <a href="#"><i class="fa-brands fa-html5"></i></a>
            </li>
            <li style="--i:1;" class="displayer_css">
                <a href="#"><i><i class="fa-brands fa-css3-alt"></i></i></a>
            </li>
            <li style="--i:2;" class="displayer_js">
                <a href="#"><i class="fa-brands fa-node-js"></i></a>
            </li>
            <li style="--i:3;" class="displayer_node">
                <a href="#"><i class="fa-brands fa-node"></i></a>
            </li>
            <li style="--i:4;" class="displayer_react">
                <a href="#"><i class="fa-brands fa-react"></i></a>
            </li>
            <li style="--i:5;" class="displayer_git">
                <a href="#"><i class="fa-brands fa-github"></i></a>
            </li>
            <li style="--i:6;" class="displayer_python">
                <a href="#"><i class="fa-brands fa-python"></i></a>
            </li>
        </div>
        `
        let toggle = document.querySelector(".toggle");
        let menu = document.querySelector(".menu");
        let html = document.querySelector(".displayer_html")
        let css = document.querySelector(".displayer_css")
        let javascript = document.querySelector(".displayer_js")
        let node = document.querySelector(".displayer_node")
        let react = document.querySelector(".displayer_react")
        let git = document.querySelector(".displayer_git")
        let python = document.querySelector(".displayer_python")

        let buttons = [html, css, javascript, node, react, git, python]
        let contenido = [
            `
            <h1>HTML</h1>
            <br>
            <p>Mi primer acercamiento fue a la edad de 15 años, cuando en mi colegio tuve la oportunidad de tener un profesor muy versado en las cuestiones de la aplicación del maquetado web en proyectos de desarrollo web</p>
            `,
            `
            <h1>CSS</h1>
            <br>
            <p>Seguramente en mis años del colegio estuve manejando este sistema de estilos, sin embargo, profundice en este desde el año 2021 cuando comencé a interesarme de lleno en este mundo del desarrollo tanto web como multiplataforma y hasta de análisis de datos</p>
            `,
            `
            <h1>JavaScript</h1>
            <br>
            <p>Tengo conocimiento relativamente nuevo con respecto a este lenguaje de programación, siendo mi primer contacto con este en noviembre de 2022. Sin embargo ya poseía conceptos sólidos de programación y lógica al haber sido este mi segundo lenguaje</p>
            `,
            `
            <h1>Node.js</h1>
            <br>
            <p>El primer contacto que hice fueron proyectos básicos que estuve revisando por un tiempo  (alrededor del 2022-2023) como el juego de 3 en linea, o tetris, en los cuales veo como modularizaban el proyecto de tal manera que incluso existia un archivo separado por función adicional</p>
            `,
            `
            <h1>React.js</h1>
            <br>
            <p>Me dejó impresionado la capacidad de simplificar la escalación y reutilización del software, así como la opción de lanzar un build del programa o pagina web que se estaba diseñando para que el proyecto tuviera un impacto en el area profesional más sólido y estructuralmente correcto</p>
            `,
            `
            <h1>GitHub</h1>
            <br>
            <p>Mi primer commit lo realicé en mayo de 2022, cuando estaba planeando unirme a un bootcamp de pago por descuento de nomina. No fue sino hasta este año 2024 que comencé a subir todos mis proyectos al repositorio virtual para exponer mis trabajos a cualquier potencial interesado en contratarme como profesional</p>
            `,
            `
            <h1>Python</h1>
            <br>
            <p>Le tengo un aprecio muy especial a este lenguaje, ya que su simplicidad logró impulsarme para continuar en este mundo de la programación y adentrarme de lleno en esto que tanto me interesaba desde muy joven.</p>
            `
        ]

        function mapeador(x,y){
            y.map((e)=>{
                x[y.indexOf(e)].onclick = function (){
                    document.querySelectorAll(".selected").forEach((e)=>{e.classList.remove("selected");});
                    x[y.indexOf(e)].classList.toggle("selected")
                    toggle.innerHTML = `<div>${e}</div>`
                }
            })
        }

        mapeador(buttons,contenido);

        toggle.onclick = function() {
            menu.classList.toggle("active")
            toggle.classList.toggle("active")
            if (toggle.classList.contains("active")){
                toggle.innerHTML = "<h1>Selecciona una tecnología</h1>"

                mapeador(buttons,contenido)


            }else{
                document.querySelectorAll(".selected").forEach((e)=>{e.classList.remove("selected");});
                toggle.innerHTML = `<i class="fa-solid fa-microchip"></i>`
            }
        }


        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
    } else {
        icono_cambio_technologies.className = "icon_i fa-solid fa-circle-arrow-left"
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
    }
})

About_me.addEventListener("click", () => {
    if (icono_cambio_about.className != "icon_i fa-solid fa-circle-check") {
        icono_cambio_about.className = "icon_i fa-solid fa-circle-check"
        check_status(icono_cambio_home,icono_cambio_experience,icono_cambio_studies,icono_cambio_technologies)
        display_aboutMe = document.createElement('div')
        display_aboutMe.className = "desplegated_div about_me"
        new_div.appendChild(display_aboutMe)
        display_aboutMe.innerHTML = `
        <ul class="main_bar">
            <li><i class="fa-solid fa-clock-rotate-left"></i><button class="section_1">Pasado</button></li>
            <li><i class="fa-solid fa-circle-pause"></i><button class="section_2">Presente</button></li>
            <li><i class="fa-solid fa-jet-fighter-up"></i><button class="section_3">Futuro</button></li>
        </ul>
        <div class="desplegated_bar">
            <ul class="secondary_bar">
                <li><button class="pestaña__1">Sueños</button></li>
                <li><button class="pestaña__2">Actividades</button></li>
                <li><button class="pestaña__3">Hobbies</button></li>
            </ul>
            <div class="main_desplegated_content">
                <h1>Elige un tiempo</h1>
            </div>
        </div>
        `
        content_about_bidimensional =[
            [
            `<div class="Dreams">
                <div class="left_container">
                    <p>En mi infancia soñaba con una familia Estable, salud para todos mis allegados, conseguir ser reconocido como un estudiante muy inteligente mas que aplicado para demostrar que mis capacidades cognitivas no se podían limitarse por métodos de evaluación educativos tan retrógrados. Buscaba la manera de cambiar donde vivía con mi familia ya que estabamos a las afueras de la ciudad y el transporte a diario era terriblemente dificil, por lo que o era caminando o era no llegar de lo lejos que era. Pasaba horas caminando al mes para poder tanto movilizarme de mi casa al estudio y viceversa.</p>
                    <img src="assets/images/familia.jpg" class="imagen_about">
                </div>
                <div class="right_container">
                    <img src="assets/images/pareja.jpg" class="imagen_about">
                    <p>Soñaba con tener una familia propia, construir un futuro junto a alguien. Buscando no sentirme solo, idealicé a la persona equivocada, planeando una vida completa como chef, viajando por el mundo y cocinandole a las personas más influyentes. Preparando los platos más exquisítos y deseados. Continuar mi camino de la busqueda de mi construcción física y mental. </p>
                </div>
            </div>
            `,`
            <div class="Actividades">
                <div class="upper_container">
                    <img src="assets/images/secundaria.jpg" class="imagen_about">
                    <img src="assets/images/planos.jpg" class="imagen_about">
                    <img src="assets/images/gamer.jpg" class="imagen_about">
                </div>
                <div class="down_container"
                    <p>Utilizaba la mayor parte del dia realizando mis estudios de secundaria, aprendiendo sobre materias que no eran necesariamente de mi agrado y sin embargo logré promocionarme anticipadamente con el esfuerzo y dedicación que me propuse el último año de mis estudios básicos. Basaba mi red social en videojuegos y gustos por ellos compartidos con compañeros de colegio, amigos de barrio y de la infancia. Cuando podía solía vender proyectos como planos arquitectónicos a compañeros para conseguir dinero extra y poder comprar cosas que necesitaba por el momento. Mi relación con mis padres era bastante deteriorada debido a que tanto ellos como yo ocupabamos la mayoria del tiempo desarrollando nuestras actividades, y como la situación económica era bastante precaria, no se podían planear salidas o paseos para mejorar la convivencia de la familia, sin embargo siempre lograban la manera de festejar todos los cumpleaños con ponqué, gaseosas y amigos o familiares</p>
                </div>
            </div>
            `,`
            <div class="Hobbies">
                <div class="desplegated_container">
                    <h2>Futbol</h2>
                    <img src="assets/images/futbol.jpg" class="imagen_about">
                </div>
                <div class="desplegated_container">
                    <h2>Videojuegos</h2>
                    <img src="assets/images/videojuego.jpg" class="imagen_about">
                </div>
                <div class="desplegated_container">
                    <h2>Inglés</h2>
                    <img src="assets/images/ingles.jpeg" class="imagen_about">
                </div>
            </div>
            `
            ],
            [
                `
                <div class="Dreams">
                    <div class="left_container">
                        <p>Mi sueño actual es conseguir trabajo como desarrollador JR de software con tecnologías que practico constantemente y afianzo para que mi conocimiento sea sólido e inquebrantable. Quiero sacar a mis padres de trabajar debido a que uno es taxista y mi madre es recepcionista por lo que siempre han existido problemas de escazes hasta que conseguí mi primer trabajo. Voy a conseguirles la casa a cada uno y los pondré a viajar por el mundo gracias a mi esfuerzo y dedicación por esta pasión. También tendré mi moto para estar con ella por los siguientes 10 años y eso lo cumpliré este mismo 2024 a más tardar en Diciembre. Lograré que mi hermano mejore su enfoque y entienda que la única persona que lo sacará de donde no quiere estar, para ponerlo en un mejor lugar es el mismo</p>
                        <img src="assets/images/programacion.jpg" class="imagen_about">
                    </div>
                    <div class="right_container">
                        <img src="assets/images/amistades.jpg" class="imagen_about">
                        <p>Buscaré la manera de capacitarme física y mentalmente para los retos que todos estos ambiciosos sueños me deparan. Me esforzaré, estudiaré duro y no desfalleceré en mi camino por convertirme en lo mejor de mi linaje en todos los aspectos posibles. Sin olvidar de donde vengo, ni hablar mal tanto de donde sali, como de a donde llegaré. Consolidaré mis amistades basandome en lealtad, amistad sincera y competencia sana, sin ningún espacio para la envidia. Nosotros venimos de lo más abajo y seremos igual de sencillos cuando lleguemos a la cima y podamos ver todo lo que logramos</p>
                    </div>
                </div>
                `,`
                <div class="Actividades">
                    <div class="upper_container">
                        <img src="assets/images/estudios.jpg" class="imagen_about">
                        <img src="assets/images/ingles2.png" class="imagen_about">
                        <img src="assets/images/tecnologias.jpg" class="imagen_about">
                    </div>
                    <div class="down_container"
                        <p>Estudiando a diario y actualizando tanto mi repositorio, luego de por fin dedicarle tiempo a aprender el manejo de versiones y de actualizaciones en local y remotos. 47 horas a la semana trabajo como Agente de servicio al cliente con la mejor empresa de la industria llamada Webhelp desde Enero 2024. Practico de 6 a 10 horas semanales en gimnasio y practicando basket para recuperar mi disciplina con mi estado físico. Continúo ahorrando para comprar una motocicleta nueva y comenzar a rodar por todo el pais en mi tiempo libre. Me educo viendo videos y tutoriales en youtube de los mejores streamers de código como MiduDev, SoyDalto, HolaMundo, Fazt, MouresDev y otros relacionados. También continúo mis estudios con el servicio nacional de Aprendizaje SENA, complementando todos los proyectos en grupo establecidos para fechas determinadas, con el propósito de afianzar conocimiento sobre el análisis y desarrollo de software</p>
                    </div>
                </div>
                `,`
                <div class="Hobbies">
                    <div class="desplegated_container">
                        <h2>Basketball</h2>
                        <img src="assets/images/basket.jpg" class="imagen_about">
                    </div>
                    <div class="desplegated_container">
                        <h2>Programación</h2>
                        <img src="assets/images/programacion2.jpg" class="imagen_about">
                    </div>
                    <div class="desplegated_container">
                        <h2>Gimnasio</h2>
                        <img src="assets/images/gimnasio.jpg" class="imagen_about">
                    </div>
                </div>
                `
            ],
            [
                `
                <div class="Dreams">
                    <div class="left_container">
                        <p>Conocer los paises restantes en mi lista para aprender sobre más culturas, maneras de pensar, de vivir y de creer en lo que nos mantiene aqui. Ser ejemplo para los demás de superación personal a base de esfuerzo y dedicación y no favoritismo mediocre y vergonzoso. Permitir que si tengo proximas generaciones, estas no tengan que preocuparse por el dinero y se centren en hacer de este mundo un lugar mejor con lo que les apasione</p>
                        <img src="assets/images/mapa.jpg" class="imagen_about">
                    </div>
                    <div class="right_container">
                        <img src="assets/images/impacto.jpg" class="imagen_about">
                        <p>Conseguir reconocimiento a nivel global debido a la gran calidad de mi trabajo como profesional dedicado a lo que ama. Contribuir con que el planeta sea un lugar más amigable tanto para nosotros, como para los demás seres vivos que lo habitan. Procurar por el bien de las personas más vulnerables incentivando programas de voluntariado y donaciones a movimientos de impacto social</p>
                    </div>
                </div>
                `,`
                <div class="Actividades">
                    <div class="upper_container">
                        <img src="assets/images/remote.jpeg" class="imagen_about">
                        <img src="assets/images/book.jpg" class="imagen_about">
                        <img src="assets/images/motivation.jpeg" class="imagen_about">
                    </div>
                    <div class="down_container"
                        <p>Trabajando cada que quiera en vez de sentir que estoy obligado, siendo mi propio jefe y permitiendome la libertad de moverme por cualquier parte del mundo mientras me encuentro trabajando para la compañía que desee de mis conocimientos y habilidades en su equipo. Escribiendo un libro o relatando mi historia desde el comienzo hasta lo que logré ser para motivar a las generaciones futuras a que no se rindan, que no todo es sacrificar tu moralidad por conseguir un buen puesto, sin embargo siempre siendo humilde y respetuoso tanto con la gente que apenas va empezando, como con personas con mucho más recorrido en nuestro ambito de interes</p>
                    </div>
                </div>
                `,`
                <div class="Hobbies">
                    <div class="desplegated_container">
                        <h2>Viajar</h2>
                        <img src="assets/images/travel.jpeg" class="imagen_about">
                    </div>
                    <div class="desplegated_container">
                        <h2>Rodar</h2>
                        <img src="assets/images/moto.jpg" class="imagen_about">
                    </div>
                    <div class="desplegated_container">
                        <h2>Estudiar</h2>
                        <img src="assets/images/study.jpg" class="imagen_about">
                    </div>
                </div>
                `
            ]
        ]

        // content_about.map((e)=>{
        //     document.querySelector(`.section_${content_about.indexOf(e)+1}`).addEventListener('click',()=>{
        //         `content_about_${content_about.indexOf(e)+1}`.map((e)=>{
        //             document.querySelector(`.pestaña__${content_about.indexOf(e)+1}`).addEventListener("click",()=>{
        //                 document.querySelectorAll(".activated").forEach((e)=>{e.classList.remove("activated")})
        //                 document.querySelector(`.pestaña__${content_about.indexOf(e)+1}`).classList.add("activated")
        //                 expositor = document.querySelector('.main_desplegated_content')
        //                 expositor.innerHTML = content_about[content_about.indexOf(e)];
        //         })
        //         })
        //     })
        // })
        expositor = document.querySelector(`.main_desplegated_content`)
        content_about_bidimensional.map((e)=>{
            document.querySelector(`.section_${content_about_bidimensional.indexOf(e)+1}`).addEventListener("click",()=>{
                document.querySelectorAll(`.section_activated`).forEach((j)=>{j.classList.remove("section_activated")})
                document.querySelectorAll(`.activated`).forEach((e)=>{e.classList.remove("activated")})
                document.querySelector(`.section_${content_about_bidimensional.indexOf(e)+1}`).classList.add("section_activated")
                expositor.innerHTML = "<h1>Elige una sección</h1>"
                e.map((f)=>{
                    document.querySelector(`.pestaña__${e.indexOf(f)+1}`).addEventListener('click',()=>{
                        document.querySelectorAll(`.activated`).forEach((e)=>{e.classList.remove("activated")})
                        document.querySelector(`.pestaña__${e.indexOf(f)+1}`).classList.add("activated")
                        expositor.innerHTML = f
                    })
                })
            })
        })

        
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
    } else {
        icono_cambio_about.className = "icon_i fa-solid fa-circle-arrow-left"
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
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
                    <img src="assets/images/jep.jpg">
                    <div class="studies_text_container">
                        <h1>COLEGIO TECNICO INDUSTRIAL JOSE ELIAS PUYANA</h1>
                        <h3>Bachiller con promoción anticipada 2013-2020</h3>
                    </div>
                </div>
                <div class="studies_container studies_2">
                    <img src="assets/images/sena.jpg">
                    <div class="studies_text_container">
                        <h1>Servicio Nacional de Aprendizaje SENA</h1>
                        <h3>Análisis y desarrollo de Software <br>2023-actualmente</h3>
                    </div>
                </div>
            

                <div class="studies_container studies_3">
                    <img src="assets/images/udemy.png">
                        <div class="studies_text_container">
                            <h1>UDEMY</h1>
                            <h3>Múltiples cursos orientados a la programación <br>2022-actualmente</h3>
                        </div>
                </div>
                <div class="studies_container studies_4">
                <img src="assets/images/cisco.jpg">

                    <div class="studies_text_container">
                        <h1>CISCO</h1>
                        <h3>Fundamentos de python, proyectos y consolidación de nivel JR 2023</h3>
                    </div>
                </div>
                <div class="studies_container studies_5">
                    <img src="assets/images/linkedin.png">
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
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
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
            </ul>
            <div class="main_container_proyect"><iframe width="100%" height="200" src="https://www.youtube.com/embed/RE87rQkXdNw?si=s9aSi0XLaUWCuF8t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>`
        colors = ['#aaa','#bbb','#ccc','#ddd','#eee','#fff']
        content = [`
        <div class="exposer_left">
            <img src="assets/images/proyect-0-0.png" class="imagen_proyecto">
            <img src="assets/images/proyect-0-0.png" class="imagen_proyecto">
        </div>
        <div class="exposer_right">
            <h1>Log-in site</h1>
            <p>Utilizando solamente HTML5, CSS, buenas practicas, correcta estructuración y conocimientos adquiridos en proyectos personales, logré instaurar esta landing page the logeo con el propósito de exponer mis habilidades de maquetación y organización de conocimientos al momento de aplicarlas en practicas</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
            </select>
            <button class="proyect_redirecter proyect_1"><a href="login.html">Visitar proyecto</a></button>
        </div>
        `,`
        <div class="exposer_left">
            <img src="assets/images/proyect-1-0.png" class="imagen_proyecto">
            <img src="assets/images/proyect-1-1.png" class="imagen_proyecto">
        </div>
        <div class="exposer_right">
            <h1>Landing page</h1>
            <p>Realizando el maquetado de la página web con CSS y HTML5 sin ninguna intervención de frameworks, diseñé la página web principal del portafolio, dandole un estilo propio y único, buscando en cada oportunidad darle la interactividad necesaria para ser del agrado del usuario</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
            </select>
            <button class="proyect_redirecter proyect_2"><a href="index_landing_page.html">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="assets/images/veterinary.png" class="imagen_proyecto">
            <img src="assets/images/veterinary2.png" class="imagen_proyecto">
        </div>
        <div class="exposer_right">
            <h1>Sitio web de veterinaria</h1>
            <p>utilizando mis conocimientos en maquetado con JS, realicé una página completa desde 0 con el propósito de exponerla a un cliente potencial e ir modificandola conforme a las preferencias de este.</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>
            <button class="proyect_redirecter proyect_3"><a href="https://pelucandog.netlify.app">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
        <img src="assets/images/projectbackend2.png" class="imagen_proyecto">
        <img src="assets/images/projectbackend2.png" class="imagen_proyecto">

        </div>
        <div class="exposer_right">
            <h1>Tricki</h1>
            <p>Utilizando tecnologías de modularización como Nextjs, Nodejs, JavaScript y HTML5 junto con estilos en cascada, se logró diseñar un juego de tres en linea capaz de guardar el proceso en el localStorage con respecto al turno y la disposición del tablero en su momento</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Node">NodeJS</option>
            </select>
            <button class="proyect_redirecter proyect_4"><a href="https://trickytraque.netlify.app">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="assets/images/project5.png" class="imagen_proyecto">
            <img src="assets/images/project5_2.png" class="imagen_proyecto">

        </div>
        <div class="exposer_right">
            <h1>Tarjetas de Twitter</h1>
            <p>Poniendo en practica la modularización y reutilización de código de manera práctica y eficiente, aplicando Node.js, React.js y Vite debido a su velocidad, para exponer un proyecto de el sistema de twitter para tarjetas de follow o unfollow que se utiliza en la web</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Node">NodeJS</option>
            </select>
            <button class="proyect_redirecter proyect_5"><a href="https://twittercards.netlify.app">Visitar proyecto</a></button>
        </div>`,`
        <div class="exposer_left">
            <img src="assets/images/project6_2.png" class="imagen_proyecto">
            <img src="assets/images/project6_2.png" class="imagen_proyecto">

        </div>
        <div class="exposer_right">
            <h1>Seguidor de puntero</h1>
            <p>Aplicando funciones de trackeo para mejorar la experiencia de usuario, con lo que se pueden personalizar las interacciones de quien visita el sitio</p>
            <select>
                <option value="HTML">Tecnologías utilizadas</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="Node">NodeJS</option>
            </select>
            <button class="proyect_redirecter proyect_6"><a href="https://cursorfollower.netlify.app">Visitar proyecto</a></button>
        </div>`]
        colors.map((e)=>{
            console.log(`.pestaña_${colors.indexOf(e)+1}`)
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
        

        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
    } else {
        icono_cambio_experience.className = "icon_i fa-solid fa-circle-arrow-left"
        try{document.querySelector('.technologies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.Home').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.about_me').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.studies').remove()}catch{console.log("Already removed")}
        try{document.querySelector('.experience').remove()}catch{console.log("Already removed")}
}})

//Experience logica

