contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo,h2_antiguo);