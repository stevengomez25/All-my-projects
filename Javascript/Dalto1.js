let numero = 1;
let numero2 = 2;
let numero3 = "1";
document.write(numero==numero3,"<br>");
document.write(numero===numero3,"<br>");


numero = 10;

if(numero>15){
    alert("Hola");
}
else if(numero === 15){
    alert("Es igual!!");
}
else{
    alert("No hola xd");
}

// // Ahora vamos a realizar el primer ejercicio de JS con prompts

let dineroCofla = parseInt(prompt("Ingrese el dinero que tiene Cofla:"));

if(dineroCofla<3){
    alert("Maldito pobre de mierda");
}
else if(dineroCofla>=3 && dineroCofla<5){
    alert("Comprate el de agua");
    alert("tu dinero sobrante es " + (dineroCofla-3))
}
else if(dineroCofla>=5 && dineroCofla<7){
    alert("Comprate el de leche uwu");
    alert("tu dinero sobrante es "+ (dineroCofla-5))
}
else{
    alert("Comprate uno de mango o uno de 3Lts");
    alert("tu dinero sobrante es "+ (dineroCofla-7))
}
let dineroPedro = parseInt(prompt("Ingrese el dinero que tiene Pedro:"));

if(dineroPedro<3){
    alert("Maldito pobre de mierda");
}
else if(dineroPedro>=3 && dineroPedro<5){
    alert("Comprate el de agua");
    alert("tu dinero sobrante es " + (dineroPedro-3))
}
else if(dineroPedro>=5 && dineroPedro<7){
    alert("Comprate el de leche uwu");
    alert("tu dinero sobrante es "+ (dineroPedro-5))
}
else{
    alert("Comprate uno de mango o uno de 3Lts");
    alert("tu dinero sobrante es "+ (dineroPedro-7))
}

let dineroRoberto = parseInt(prompt("Ingrese el dinero que tiene Roberto:"));

if(dineroRoberto<3){
    alert("Maldito pobre de mierda");
}
else if(dineroRoberto>=3 && dineroRoberto<5){
    alert("Comprate el de agua");
    alert("tu dinero sobrante es " + (dineroRoberto-3))
}
else if(dineroRoberto>=5 && dineroRoberto<7){
    alert("Comprate el de leche uwu");
    alert("tu dinero sobrante es "+ (dineroRoberto-5))
}
else{
    alert("Comprate uno de mango o uno de 3Lts");
    alert("tu dinero sobrante es "+ (dineroRoberto-7))
}

// // Ahora metamos algo de iteradores como while
let numeroPrueba = 1;
while(numeroPrueba<=7){
    document.write(numeroPrueba+"<br>");
    numeroPrueba++;
}

let arrayUno = [1,2,3,4,5,6,7,8,9,10];

// // Ahora una de los iteradores únicos de lenguajes de medio nivel

do{
    document.write(numeroPrueba+"<br>");
    numeroPrueba++;
}

while(numeroPrueba<=20)

// // Aqui podemos ver que llegó hasta 21 porque se ejecutó de nuevo antes
// // de hacer la validación correspondiente del valor

//Ahora creemos un programa de interés compuesto

valorMensualidad = parseInt(prompt("Ingrese el valor a ingresar mensualmente:"));

numeroMeses = parseInt(prompt("Ingrese los meses:"))

valorMensualidad_Agregada = valorMensualidad+(valorMensualidad*0.012);

vueltasAplicadas = 0;

if(numeroMeses==1){
    alert(valorMensualidad_Agregada);
}
else{
    while (vueltasAplicadas <= numeroMeses){
        valorMensualidad_Agregada = valorMensualidad_Agregada + (valorMensualidad_Agregada*0.14);
        valorMensualidad_Agregada = valorMensualidad_Agregada + valorMensualidad;
        ++vueltasAplicadas;
    }
    alert(valorMensualidad_Agregada);
}
