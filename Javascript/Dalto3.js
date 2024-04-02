// Las funciones nos permiten ahorrar código y ser más eficientes al determinar una función ciertas acciones y no tener que repetir todo el código del proceso como podremos ver a continuación

function saludar(){
    let saludo = prompt("Como fue tu dia?");
    if (saludo == "bien"){
        alert("Que bien!");
    }
    else{
        alert("Una pena");
    }
}
//Siempre hay que declarar la función para usarla como se ve a continuación:
saludar();

//Ahora veamos como funciona return
function saludo_con_return(){
    alert("Hola pelotudo");
    return "Que pasa bro";
}
//al poner el return, la función se convierte en el valor del return y se utilizará así más adelante como podemos ver en este ejemplo:
let saludo_exit = saludo_con_return();

document.write(saludo_exit);

//PARAMETROS

function sum(num1,num2){
    result = num1 + num2;
    document.write("<br>",result,"<br>");
}
//Se ingresan los números que reemplazarán a num1 y num2 dentro de la funcion:
sum(30,40);

//Tambien funcionan con textos:

function saludo_pelotudo(nombre){
    saludo_devuelta = `Hola ${nombre} ¿Como estás?`;
    document.write(saludo_devuelta);
}

saludo_pelotudo("Angel");


//Verificar Cofla mamaguevo


Free = false;

const ValidarPersona=(time)=>{
    validarEdad = prompt("Por favor ingrese su edad:");
    if (validarEdad >= 18){
        if (Free == false && time >= 2 && time < 7){
            alert("Entraste gratis papu!")
            Free = true;
        }
        else{
            alert("Entras pero pagas crack");
        }
    }
    else{
        alert("Pa, no podes entrar CAPULLO");
    }
}
ValidarPersona(1.3);
ValidarPersona(1);
ValidarPersona(2);
ValidarPersona(3);
ValidarPersona(4);
