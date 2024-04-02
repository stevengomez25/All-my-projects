const nombre = document.getElementById("name");
const email = document.getElementById("email");
const topic = document.getElementById("materia");
const enviar = document.getElementById("submit");
const resultado = document.getElementById("resultado");


enviar.addEventListener("click", (e) =>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }
    else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length<5){
        error[0]=true;
        error[1]="El nombre no puede contener menos de 5 caractéres";
        return error;
    }
    else if(nombre.value.length > 40){
        error[0]=true;
        error[1]="El nombre no puede contener mas de 40 caracteres";
        return error;
    }
    else if(email.value.length<5||
        email.value.length>40||
        email.value.indexOf("@")==-1||
        email.value.indexOf(".")==-1){
            error[0]=true;
            error[1]="El email no cumple los requisitos";
            return error;
        }
    error[0] = false;
    return error;
}