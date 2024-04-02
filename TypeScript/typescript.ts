let person = {
    name : "John",
    age : 21,
    nationality : "Chinese"
}

person.nationality = "korean";

// TYPESCRIPT permite cambiar los valores siempre y cuando sean del mismo tipo del que fueron declarados inicialmente

console.log(person.nationality);


let anyvalue; //Cuando no determinamos el tipo designandolo en let, var o const, le pondra un tipo any;

anyvalue = 30;

console.log(anyvalue);

anyvalue = "sapo";

console.log(anyvalue);

anyvalue = true

console.log(anyvalue);

// Lo que hace el tipo any es ignorar el tipado de typescript y basicamente utiliza el regular de JS
//se debe evitar usarse al MAXIMO

const sayHiFromFunction = (fn:(name:string) =>string)=>{
    fn('Miguel')
}

const sayHi = (name:string) =>{
    console.log(name);
    return name;
}

sayHiFromFunction(sayHi) //Si no pongo un return string como lo especifiqué arriba en los tipos de datos
                        //que tiene sayHiFromFunction(), arrojará un error, verificalo quitandole el
                        //return a la const sayH


const holaComotas = (fn:(name:string) =>void) =>{ //cuando ponemos void esto significa que no importa si
                                                //retorna algun valor, va a dar igual para la inferenciación
                                                //de typescript
    fn('Sapo')
}

const saySapo=(name:string) =>{
    console.log(name);
}

//para tipar las arrowfunctions hay dos metodos pero el mejor es el siguiente:

const sumar=(a:number, b:number):number=>{return a+b}

// esta es poco utilizada
const restar:(a:number, b:number)=>number=(a,b)=>{return a-b}
