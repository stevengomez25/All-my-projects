contenedor = document.querySelector(".contenedor");

h1 = document.querySelector(".h1");

console.log(h1.nextElementSibling);
console.log("Usando ELEMENT podremos elegir el item instead of el espacio entre el código HTML")
h2 = document.querySelector(".h2");

console.log(h2.previousSibling);
console.log("En este ^^ como podemos ver devuelve el texto entre la cadena de HTML por tener margenes")

div3 = document.querySelector(".div_3");

console.log(div3.closest(".div"));