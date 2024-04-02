
let nombre = "pexdro";

const Promesa = new Promise((resolve, reject) => {
    if(nombre !== "pedro")reject("Lo siento, el nombre no es pedro");
    else resolve(nombre);
})


Promesa.then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.error(err);
})