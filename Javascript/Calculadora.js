class Calculadora{
    constructor(){
    }
    sumar(num1,num2){
        return parseInt(num1)+ parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1)- parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1)* parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1)/ parseInt(num2);
    }
    potencia(num1,num2){
        return parseInt(num1)** parseInt(num2);
    }
    raizCuadrada(num1){
        return Math.sqrt(num1);
    }
    raizCubica(num1){
        return Math.cbrt(num1);
    }
}

const calculadora = new Calculadora();

alert("Que operación desea realizar?");
let operacion = prompt("1.suma 2.resta 3.multiplicación 4.división 5.potenciación 6.raiz cuadrada 7.raiz cubica");
if (operacion == 1){
    num1 = prompt("Ingrese el primer numero a sumar");
    num2 = prompt("Ingrese el segundo numero a sumar");
    resultado = calculadora.sumar(num1,num2);
    alert(`su resultado es ${resultado}`);
}
else if (operacion == 2){
    num1 = prompt("Ingrese el primer numero a restar");
    num2 = prompt("Ingrese el segundo numero a restar");
    resultado = calculadora.restar(num1,num2);
    alert(`su resultado es ${resultado}`);
}
else if (operacion == 3){
    num1 = prompt("Ingrese el primer numero a multiplicar");
    num2 = prompt("Ingrese el segundo numero a multiplicar");
    resultado = calculadora.multiplicar(num1,num2);
    alert(`su resultado es ${resultado}`);
}
else if (operacion == 4){
    num1 = prompt("Ingrese el primer numero a dividir");
    num2 = prompt("Ingrese el segundo numero a dividir");
    resultado = calculadora.dividir(num1,num2);
    alert(`su resultado es ${resultado}`);
}
else if (operacion == 5){
        num1 = prompt("Ingrese el primer numero a potenciar");
        num2 = prompt("Ingrese el segundo numero a ser potencia");
        resultado = calculadora.potencia(num1,num2);
        alert(`su resultado es ${resultado}`);
}
else if (operacion == 6){
        num1 = prompt("Ingrese el numero a sacar su raíz cuadrada");
        resultado = calculadora.raizCuadrada(num1);
        alert(`su resultado es ${resultado}`);
}
else if (operacion == 7){
        num1 = prompt("Ingrese el numero a sacar su raíz cubica");
        resultado = calculadora.raizCubica(num1);
        alert(`su resultado es ${resultado}`);
}

calculadora;