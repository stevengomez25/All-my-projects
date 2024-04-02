const container = document.querySelector(".flex-container");
let contador = 0;
let document_fragment = document.createDocumentFragment();

// -------------------------------------------------------------
let button_content = document.querySelector(".send-button");
button_content.value = button_content.value.toUpperCase();
// Esto de aqui ^^ Es innecesario pero igual se usa, optimizando solo seria poner value=COMPRAR en el HTML
function crearLLave(nombre,modelo,precio){
    contador++;
    img = "<img class='llave-img' src='key.jpg'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

for (var i=1; i<=20; i++){
    let modeloRandom = Math.round(Math.random()*100000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLLave(`llave ${i}`,`modelo ${modeloRandom}`,`$${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",() =>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    document_fragment.appendChild(div);
}

container.appendChild(document_fragment);


