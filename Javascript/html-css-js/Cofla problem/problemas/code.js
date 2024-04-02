buttons_names_classes=["home","search","subscribe","unsubscribe"]
let container = document.createElement("ul");
xd = document.querySelector(".flex-container");
xd.appendChild(container);

function crear_boton(nombre,icon){
    list_added = document.createElement("div");
    container.appendChild(list_added);
    list_added.outerHTML = `<li class="button ${nombre}"><a>${nombre}</a><i class="${icon}"></i></div>`;
    return container;
}

for(i of buttons_names_classes){
    crear_boton(i,"icon_i fa-solid fa-circle-arrow-left");
}

NodeListNumbers = document.querySelectorAll('.button');
console.log(NodeListNumbers)

NodeListNumbers.forEach(function(e){
    e.addEventListener("click",function(){
        if(e.style.backgroundColor == "red"){
            e.style.backgroundColor = "blue";
        }
        else{
            e.style.backgroundColor = "red";
        };
    })
})