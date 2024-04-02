console.log("Hola Mundo");
console.log("Que pasa perro");
let MiVariable1 = "10";
let MiVariable2 = "20";
console.log(MiVariable1*MiVariable2)

//Tipos de datos

let $miString = "Hola";
console.log($miString);
console.log(typeof $miString);
let $miEntero = 20;
console.log($miEntero);
console.log(typeof $miEntero);
let $miFloat = 20.30;
console.log($miFloat);
console.log(typeof $miFloat);
let $miBoolean = true;
console.log($miBoolean);
console.log(typeof $miBoolean);
let $miNull = null;
console.log($miNull);
console.log(typeof $miNull);
let $miUndefined = undefined;
console.log($miUndefined);
console.log(typeof $miUndefined);

/* Solo se puede declarar una vez la variable,
ya sea con let o var(no recomendable).
luego se reasigna directamente*/

let $miVariablePrueba = "Hola"
console.log($miVariablePrueba);
$miVariablePrueba = 30
console.log($miVariablePrueba)

//Hoisting definición (Good practices)

//var x; //Declaramos la variable
x = 10; //Inicializamos la variable

console.log(x)

var x; //Podemos declarar la variable incluso después de utilizarla


y = 20;
//Con let no podemos inicializar la variable antes de definirla
console.log(y)

let y;