//programa para obtener info
const obtenerInfo = (materia)=>{
    materias = {
        fisica: ["Perez","Pedro","Ramiro","Ulises","Maria","Paco"],
        programacion: ["Rodriguez","Pedro","Ramiro","Maria","Paco"],
        logica: ["Camilo","Ramiro","Ulises","Maria","Paco"],
        quimica: ["Gomez","Pedro","Ramiro","Ulises","Maria"],
    }
    if (materias[materia] != undefined){
        return [materias[materia],materia];
    }
    else{
        return false
    }
}
const mostrarInfo = (materia)=>{
    let informacion = obtenerInfo(materia);

if (informacion !== false){
    let profesor = obtenerInfo(materia)[0][0];
    alumnos = obtenerInfo(materia)[0];
    alumnos.shift();
    document.write(`<b>el profesor de ${informacion[1]} es:</br><b style ="color: #00f">${profesor}</b></br><b>Alumnos presentes en ${informacion[1]}:</b></br><b style="color:red">${alumnos}</b></br>`);
}
}

mostrarInfo("fisica");

mostrarInfo("programacion");

mostrarInfo("logica");

mostrarInfo("quimica");
