class Persona{
    static contadorObjetosPersona = 0;
    email = 'valor default email';

    static get MAX_USERS(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona<Persona.MAX_USERS?
        this._idPersona = ++Persona.contadorObjetosPersona:console.log("Máximo de usuarios alcanzado");

 
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get appellido(){
        return this._apellido;
    }
    set appellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._idPersona + " " + this._nombre + " " + this._apellido; 
    }
    toString(){
        //Aplicando polimorfismo y multithreading
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    //Aplicando inheritance
    constructor(nombre, apellido, departamento){
        super(nombre,apellido); //Se llama al constructor del Padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}


let persona1 = new Persona('Juan', 'Ramirez');
console.log(persona1.toString());

let empleado1 = new Empleado('Alex', 'Alcantara', 'Tecnología');
console.log(empleado1.toString());

console.log(Persona.contadorObjetosPersona);
//Probando un método estático con get, que no es reasignable al ser especificado solo con el get.
console.log(Persona.MAX_USERS);

let persona2 = new Persona('Alejandro', 'Fernandez');
console.log(Persona.contadorObjetosPersona);

let empleado2 = new Empleado('Raul','Juarez', 'Administrativo');
console.log(Persona.contadorObjetosPersona);

let empleado3 = new Empleado('Hernan','Gonzales', 'Oficios varios   ');
console.log(Persona.contadorObjetosPersona);

let persona3 = new Persona('Ramiro', 'Herndandez');
console.log(Persona.contadorObjetosPersona);


class Cliente extends Persona(){
    
}