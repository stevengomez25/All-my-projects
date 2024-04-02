const contenedor = document.querySelector(".contenedor");


const item = document.createElement("LI");
console.log(item);
const textoDelItem = document.createTextNode("Este es un item de la lista");
console.log(textoDelItem);

item.appendChild(textoDelItem);
console.log(item);

contenedor.appendChild(item);

const item2 = document.createElement("LI");
item2.innerHTML = "Esto fue ingresado con <b>innerHTML</b> directamente sin hacer appendChild de un createTextNode";
contenedor.appendChild(item2);



contenedor_2 = document.querySelector(".contenedor_2");

const primer_hijo = contenedor_2.firstChild;

console.log(primer_hijo);
//Esto mostrará #text porque despues del div viene un espacio antes del h1, si lo quitamos si muestra h1

const ultimo_hijo = contenedor_2.lastChild;
console.log(ultimo_hijo);
//ESTO ES PORQUE ESTAMOS USANDO FIRSTCHILD en vez de FIRSTELEMENTCHILD

const primer_hijo_item = contenedor_2.firstElementChild;
console.log(primer_hijo_item);
// Estos si seleccionan el primer element dentro del container

const hijos = contenedor_2.childNodes;
console.log(hijos);

// Esto no es un Array, jamas se podra recorrer o pushear o shiftear
// Sin embargo, se puede recorrer con un forEach

hijos.forEach(hijo =>console.log(hijo));

//ahora para devolverlos sin los #text entre lineas del HTML se hace con children

hijos_children = contenedor_2.children;
console.log(hijos_children);
//Sin embargo no devuelve lo que contienen las etiquetas
// no se puede recorrer con forEach las coleccionesHTML

// hijos_children.forEach(hijo=>console.log(hijo));   <<Descomentar para probar

// Sin embargo, se puede recorrer con un for in
for (child of hijos_children){
    console.log(child)
} //Este ultimo si muestra el contenido junto con las etiquetas