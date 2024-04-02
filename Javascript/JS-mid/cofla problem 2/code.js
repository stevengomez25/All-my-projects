alumnos = [
  {
    nombre: "Steven Gomez",
    email: "brastegocha@gmail.com",
    materia: "Fisica 3",
  },
  {
    nombre: "ramiro Gomez",
    email: "ramiro@gmail.com",
    materia: "fisica 1",
  },
  {
    nombre: "kamilo Florez",
    email: "kamilo@gmail.com",
    materia: "calculo 3",
  },
  {
    nombre: "Damian torres",
    email: "dtorres25@gmail.com",
    materia: "Literatura",
  },
  {
    nombre: "Kevin portilla",
    email: "kport@gmail.com",
    materia: "Recreo",
  },
];


const boton = document.querySelector(".button-confirm");


for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];
  let HTMLCode = `<div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana_elegida">
                <option value="semana 1">semana 1</option>
                <option value="semana 2">semana 2</option>
            </select>
        </div>`;
    document.querySelector(".grid_container").innerHTML += HTMLCode;
}

boton.addEventListener("click", ()=>{
    let confirmar = confirm("Are you sure you want to save changes?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
    let semanas_elegidas = document.querySelectorAll(".semana_elegida");
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanas_elegidas[elemento].value;
    }
    }
})