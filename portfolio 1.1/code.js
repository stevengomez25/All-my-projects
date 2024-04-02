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
i.className ="icon_element fa-brands fa-searchengin fa-rotate-90"
search_bar.appendChild(i);

input_search = document.createElement('input');
input_search.className = 'search_input';
input_search.placeholder ="Search";
search_bar.appendChild(input_search);

button_container = document.createElement('div');
button_container.className = "button_container";
section_right.appendChild(button_container);

dot_changer = document.createElement('label');
dot_changer.className ="switch";
button_container.appendChild(dot_changer);

input_switcher = document.createElement('input');
input_switcher.type = "checkbox";
dot_changer.appendChild(input_switcher);

span_switcher = document.createElement('span');
span_switcher.className = "slider";
dot_changer.appendChild(span_switcher);


input_switcher.addEventListener("change",function() {
    if(this.checked) {
        new_div.style.filter="invert(1)";
    }
    else{
        new_div.style.filter="invert(0)";
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

let classes = [];
