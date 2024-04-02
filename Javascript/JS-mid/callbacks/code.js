class persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Steven Gomez","@stevengomez_25"],
    ["Dario Gutierrez","@dariogut"],
    ["Juanito Perez","@juanpe"],
    ["Elver Garcia","@elvergcia"]
]

const personas=[]

for(let i = 0; i < data.length; i++){
    personas[i] = new persona(data[i][0],data[i][1]);
}

const ObtenerPersona = (id,cb) => {
    if (personas[id]==undefined){
        cb("no se ha encontrado la persona");
    }
    else{
        cb(null,personas[id])
    }
}
ObtenerPersona(1,(err,persona) => {
    if(err){
        console.log(err)
    }
    else{console.log(persona.nombre);console.log(persona.instagram)}
})