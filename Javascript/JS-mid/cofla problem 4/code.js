const materiasHTML = document.querySelector(".materias");


const materias = [
  {
    nombre: "fisica 3",
    nota: "7"
  },
  {
    nombre: "quimica 3",
    nota: "8"
  },
  {
    nombre: "matematica discretas 2",
    nota: "6"
  },
  {
    nombre: "base de datos 3",
    nota: "9"
  },
  {
    nombre: "Programación 4",
    nota: "8"
  },
]


const obtenerMateria = (id) => {
  return new Promise((resolve, reyect) => {
    materia = materias[id];
    if(materia ==undefined)reyect("la materia no existe");
    else setTimeout(()=>{resolve(materia)},Math.random()*4000)
  })
}

const devolverMaterias = async()=>{
  let materia = [];
  for(let  i = 0; i < materias.length; i++){
    materia[i] = await obtenerMateria(i);
    let newHTMLcode = `
    <div class="materia">
      <div class="nombre">${materia[i].nombre}</div>
      <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLcode;
  }
}

devolverMaterias();