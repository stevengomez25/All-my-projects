//Al igual que en Python, los mismos operadores influyen aquí

let a, b, c;
a = 5; b = 3; c = 4;

//Suma
console.log(a+b)

//resta
console.log(a-b)

//multiplicación
console.log(c*b)

//División
console.log(b/c)

//Potenciación
console.log(a**b)

//Resto de división
console.log(a%b)

//División parte entera
console.log(Math.trunc(a/b))

//Operadores de incremento
++a;
console.log(a)
//Post-Incremento
a++;
/* el incremento quedará pendiente hasta que se llame o utilice
la variable de nuevo, en este caso hasta la linea 34*/
console.log(a)

//Operadores de decremento
--b;
console.log(b)
//Post-Decremento
b--;
/* Ocurre lo mismo aquí, se aplicará el decremento hasta la
linea que vuelva a invocarla, en este caso la linea 41*/
console.log(b)

//Ejemplo
a = 3;
b = 5;
c = ++a * b--;
/* Se realiza la operación y luego se aplica el decremento
a la variable sola */
console.log(c)
console.log(b)


//Operadores de asignación

let $miNumero = 10;
console.log($miNumero)
//Reasignar un valor a la variable cambia este mismo
$miNumero = 20;
console.log($miNumero)

//suma la cantidad a la variable y la transforma en el resultado
$miNumero +=5;
console.log($miNumero)

//resta la cantidad a la variable y la transforma en el resultado
$miNumero -=3;
console.log($miNumero)

//Multiplica y asigna
$miNumero *=2;
console.log($miNumero)

//divide y asigna
$miNumero /=4;
console.log($miNumero)

//Divide y asigna el residuo de la división
$miNumero %=4;
console.log($miNumero)

//Potencia y asigna el resultado
$miNumero **=3;
console.log($miNumero)