class Persona{

    static contadorPersonas = 0;
    static contadorEmpleados = 0;
    static contadorClientes = 0;

    constructor(nombre,apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id = ++Persona.contadorPersonas;
    }
    get getIdPersona(){
        return this._id;
    }
    get getNombre(){
        return this._nombre
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    set setApellido(apellido){
        this._apellido = apellido;
    }
    get getEdad(){
        return this._edad;
    }
    set setEdad(edad){
        this._edad = edad;
    }

    nombreCompleto(){
        return this._id + " " + this._nombre + " " + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }
}


class Empleado extends Persona{
    constructor(nombre,apellido, edad,sueldo){
        super(nombre,apellido, edad);
        this._sueldo = sueldo;
        ++Persona.contadorEmpleados;
    }

    get getIdEmpleado(){
        return this._id;
    }
    get getSueldo(){
        return this._sueldo;
    }
    set setSueldo(sueldo){
        this._sueldo = sueldo;
    }

    nombreCompleto(){
        return super.nombreCompleto() + " $" + this._sueldo;
    }

}

class Cliente extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre,apellido, edad);
        this._fecharegistro = new Date();
        ++Persona.contadorClientes;
    }
    get getIdCliente(){
        return this._id;
    }
    get fecharegistro(){
        return this._fecharegistro;
    }
    set fecharegistro(fecharegistro){
        this._fecharegistro = fecharegistro;
    }

    nombreCompleto(){
        return super.nombreCompleto() + " " + this._fecharegistro;
    }
}

let persona1 = new Empleado('Steven', 'Gomez', '3500');
console.log(persona1.getSueldo);

let cliente1 = new Cliente('Raul','Alejandro');
console.log(cliente1._fecharegistro);
