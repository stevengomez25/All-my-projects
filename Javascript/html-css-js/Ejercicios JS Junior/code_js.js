
// CREAR UNA SUMADORA 1.


// function sum() {
//     let num1 = prompt("Ingrese el primer numero:");
//     let num2 = prompt("Ingrese el segundo numero:");
//     alert(`su resultado fue ${parseInt(num1) + parseInt(num2)}`);
//     return parseInt(num1) + parseInt(num2);
// }

//SI el anterior recibe valores no numericos, volverlos a pedir 2.

// for(var i = 0; i < 9999; i++){
//     let result = sum();
//     if(isNaN(result)||result<0){
//         alert("Ha ingresado un valor no numerico, intente de nuevo")
//     }
//     else{
//         i = 9999;
//     }
// }

//SUMAR LOS RESULTADOS Y DAR UN PROMEDIO DE RESULTADO 3.

// function sum_2() {
//     let num1 = parseInt(prompt("Ingrese el primer numero:"));
//     let num2 = parseInt(prompt("Ingrese el segundo numero:"));
//     alert(`su resultado fue ${num1 + num2}`);
//     if(num1 <= 0 || num2 <= 0){
//         return NaN;
//     }
//     else{
//         return num1 + num2;
//     }
// }

// resultados_sumados = 0;
// count = 0;
// for(var i = 0; i < 9999; i++){
//     let result = sum_2();
//     if(isNaN(result)){
//         alert("Ha ingresado un valor no numerico o negativo, la ejecución terminará")
//         i=9999;
//         alert(`Promedio de los sumandos fue: ${resultados_sumados/count}`)
//     }
//     else{
//         resultados_sumados = resultados_sumados + result;
//         count+=1;
//     }
// }

//Mostrar todos los numeros entre dos numeros ingresados por el usuario 4.

// function num_entre_numeros(){
//     let num_entre_numeros_total = [];
//     let numero_ingresado_1 = parseInt(prompt("Ingrese el primer numero:"))
//     let numero_ingresado_2 = parseInt(prompt("Ingrese el segundo:"))
//     if(numero_ingresado_1>numero_ingresado_2){
//         for(var i=1;numero_ingresado_2+i<numero_ingresado_1;i++){
//             num_entre_numeros_total.push(numero_ingresado_2+i);
//         }
//     }
//     else if(numero_ingresado_2>numero_ingresado_1){
//         for(var i=1;numero_ingresado_1+i<numero_ingresado_2;i++){
//             num_entre_numeros_total.push(numero_ingresado_1+i);
//         }
//     }
//     else{
//         num_entre_numeros_total.push("SON IGUALES");
//     }
//     return num_entre_numeros_total;
// }

// let juega = alert(num_entre_numeros());

//Mostrar todos los numeros impares 5.

// function num_entre_numeros_impares(){
//     let num_entre_numeros_total = [];
//     let numero_ingresado_1 = parseInt(prompt("Ingrese el primer numero:"))
//     let numero_ingresado_2 = parseInt(prompt("Ingrese el segundo:"))
//     if(numero_ingresado_1>numero_ingresado_2){
//         for(var i=1;numero_ingresado_2+i<numero_ingresado_1;i++){
//             if((numero_ingresado_2+i)%2!=0){
//                 num_entre_numeros_total.push(numero_ingresado_2+i);
//             }
//         }
//     }
//     else if(numero_ingresado_2>numero_ingresado_1){
//         for(var i=1;numero_ingresado_1+i<numero_ingresado_2;i++){
//             if((numero_ingresado_1+i)%2!=0){
//                 num_entre_numeros_total.push(numero_ingresado_1+i);
//             }
//         }
//     }
//     else{
//         num_entre_numeros_total.push("SON IGUALES");
//     }
//     return num_entre_numeros_total;
// }

// let juega2 = alert(num_entre_numeros_impares());


// Calculadora de divisores 6.

// x = parseInt(prompt("Ingresa el número para determinar sus divisores: "));
// let num_divisores =(x)=>{divisores = [];for(let i=0;i<=x;i++)if(x%i===0){divisores.push(i)};alert(divisores)};
// num_divisores(x);

//PAR O IMPAR CON PROMPTS Y PIDIENDO QUE SEA UN DATO VALIDO 7.

// x = parseInt(prompt("Ingrese un numero el sistema averiguara si es par o impar: "))
// let par_o_impar=(x)=>{while(isNaN(x)){alert(`${x} no es un numero, por favor ingrese un valor valido`);x = prompt("ingrese un numero valido: ")};if(x%2==0){alert("Es par")}else{alert("es impar")}}
// par_o_impar(x);

//TABLA DE MULTIPLICAR 8.

// num_tabla = parseInt(prompt("Ingrese el número para generar su tabla de multipicar"));
// let tabla_multiplicar=(x)=>{for(i=1;i<=10;i++){document.write(`<br> ${x} x ${i} = ${x*i}<br>`)}};
// tabla_multiplicar(num_tabla);

//CALCULADORA SI LE DAS MAL ALGUN NUMERO TE RETORNA A PEDIRTELOS 9.

// function calculadora_total(){
//     do{
//         x = parseInt(prompt("Ingrese el primer numero"))
//         y = parseInt(prompt("Ingrese el segundo número"))
//     }while(isNaN(x)||isNaN(y));
//     document.write(`suma = ${x} + ${y} = ${x+y}<br>`);
//     document.write(`resta = ${x} - ${y} = ${x-y}<br>`);
//     document.write(`multiplicacion = ${x} * ${y} = ${x*y}<br>`);
//     document.write(`división = ${x} / ${y} = ${x/y}<br>`);
// }
// calculadora_total();

// SEIS NUMEROS EN UN ARRAY 10.

// let seisNumerosEnArray = () =>{numeros = [];for(let i = 1; i <= 6;i++){ing = prompt(`Ingrese el numero ${i}: `);numeros.push(ing);}document.write(numeros)}

// seisNumerosEnArray();

//MOSTRAR ARRAY EN PANTALLA Y EN CONSOLA 11. ^^ solo es poner un console.log();

//MOSTRAR LOS ARRAYS ANTERIORES PERO AHORA QUE LOS ORDENE 12.

// let seisNumerosEnArray = () =>{numeros = [];for(let i = 1; i <= 6;i++){ing = prompt(`Ingrese el numero ${i}: `);numeros.push(ing);}numeros = numeros.sort();document.write(numeros)};
// seisNumerosEnArray();

//INVIERTE EL ORDEN DEL ARRAY 13.

// let seisNumerosEnArray = () =>{numeros = [];for(let i = 1; i <= 6;i++){ing = prompt(`Ingrese el numero ${i}: `);numeros.push(ing);}numeros = numeros.sort(function(a,b){return b-a});document.write(numeros)};
// seisNumerosEnArray();

//CONTAR LOS ELEMENTOS DEL ARRAY 14.

// let ingresarArray = () =>{arrayElementos=[];x = prompt(`Inserte el valor:`);counter = 0;for(i=0;i<9999;i++){if(x=="cancelar"){i = 9999;}else{arrayElementos.push(x);counter+=1;x = prompt(`Inserte el valor:`) }}alert(counter)};

// ingresarArray();

//ENCONTRAR VALOR EN EL ARRAY, EN TEORIA FUNCIONA XD 15.

// let find_in_array = () =>{random_array =[];x = parseInt(prompt(`Inserte el valor a verificar:`));for(i=0;i<15;i++){random_array.push(Math.round(Math.random()*10*7))};while(!(x in random_array)){alert("No esta en el array");x = parseInt(prompt(`Inserte el valor a verificar:`))};{alert("Si está!")};document.write(random_array)};

// find_in_array();


// DOM MANEJO 16.

// contenedor = document.querySelector(".manejo_del_dom");
// fragment = document.createDocumentFragment();
// form = document.createElement("FORM");
// contenedor.appendChild(form);

// input_nombre = document.createElement("INPUT");
// input_nombre.setAttribute("type", "text");
// input_nombre.setAttribute("required","");
// input_nombre.classList.add("input_nombre");
// input_nombre.placeholder = "nombre";
// form.appendChild(input_nombre);


// input_apellido = document.createElement("INPUT");
// input_apellido.setAttribute("type", "text");
// input_apellido.setAttribute("required","");
// input_apellido.classList.add("input_apellido");
// input_apellido.placeholder = "apellido";
// form.appendChild(input_apellido);

// input_edad = document.createElement("INPUT");
// input_edad.setAttribute("type", "number");
// input_edad.setAttribute("required","");
// input_edad.classList.add("input_edad");
// input_edad.placeholder = "edad";
// form.appendChild(input_edad);

// input_submit = document.createElement("INPUT");
// input_submit.setAttribute("type", "submit");
// input_submit.setAttribute("required","");
// input_submit.classList.add("input_submit");
// input_submit.placeholder = "enviar";
// form.appendChild(input_submit);

// const nombre = document.querySelector(".input_nombre");
// const apellido = document.querySelector(".input_apellido");
// const edad = document.querySelector(".input_edad");
// input_submit.addEventListener("click",function(){alert(`su nombre es ${nombre.value}, su apellido es ${apellido.value} y su edad es ${edad.value} años.`)})

//OPTIMIZANDO MI CODIGO

contenedor = document.querySelector(".manejo_del_dom");
form = document.createElement("FORM");
contenedor.appendChild(form);

function crear_input(name,type){
    let input = document.createElement("INPUT");
    input.classList.add(`input_${name}`);
    input.setAttribute("type",`${type}`);
    input.setAttribute("required","");
    input.placeholder = `${name}`;
    form.appendChild(input);
}

crear_input("nombre","text");
crear_input("apellido","text");
crear_input("edad","number");
crear_input("submit","submit");

const nombre = document.querySelector(".input_nombre");
const apellido = document.querySelector(".input_apellido");
const edad = document.querySelector(".input_edad");
const submit = document.querySelector(".input_submit");
submit.addEventListener("click",function(){
    alert(`su nombre es ${nombre.value}, su apellido es ${apellido.value} y su edad es ${edad.value} años.`);
    //ESTO ES PARTE DEL EJERCICIO 17.
    let nombrecito = document.querySelector(".input_nombre").value;
    localStorage.setItem("nombre",nombrecito);
    let apellidito = document.querySelector(".input_apellido").value;
    localStorage.setItem("apellido",apellidito);
    let edadcita = document.querySelector(".input_edad").value;
    localStorage.setItem("edad",edadcita);
})

//ALMACENAR DATOS ANTERIORES EN LOCALSTORAGE 17

let list = document.createElement("UL");
let item_list = document.createElement("LI");
let item_list2 = document.createElement("LI");
let item_list3 = document.createElement("LI");
let button_remove_info = document.createElement("INPUT");

//EJERCICIO 18 BOTON QUE BORRE LOCALSTORAGE

button_remove_info.setAttribute("type","submit");

//EJERCICIO 18 BOTON QUE BORRE LOCALSTORAGE

contenedor.appendChild(list);
item_list.innerHTML = localStorage.getItem("nombre");
list.appendChild(item_list);
item_list2.innerHTML = localStorage.getItem("apellido");
list.appendChild(item_list2);
item_list3.innerHTML = localStorage.getItem("edad");
list.appendChild(item_list3);

//EJERCICIO 18 BOTON QUE BORRE LOCALSTORAGE

list.appendChild(button_remove_info);
button_remove_info.value = "Borrar";
button_remove_info.addEventListener("click",function(){localStorage.clear()})

//EJERCICIO 18 BOTON QUE BORRE LOCALSTORAGE



