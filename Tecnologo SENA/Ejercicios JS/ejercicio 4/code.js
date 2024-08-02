class Persona {
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, cancionesFavoritas) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = cancionesFavoritas;
    }
}

function agregarPersona(personas) {
    const nombre = prompt("Ingrese el nombre de la persona:");
    const cedula = prompt("Ingrese el número de identificación (cédula):");
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento (DD/MM/AAAA):");
    const correo = prompt("Ingrese el correo electrónico:");
    const ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    const ciudadOrigen = prompt("Ingrese la ciudad de origen:");
    
    const cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        const artista = prompt(`Ingrese el nombre del artista de la canción favorita ${i + 1}:`);
        const titulo = prompt(`Ingrese el título de la canción favorita ${i + 1}:`);
        cancionesFavoritas.push({ artista, titulo });
    }

    const nuevaPersona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, cancionesFavoritas);
    personas.push(nuevaPersona);
    alert("Persona agregada exitosamente.");
}

function mostrarPersona(personas) {
    const posicion = parseInt(prompt("Ingrese la posición de la persona en el vector (de 0 a 5):"), 10);
    
    if (posicion >= 0 && posicion < personas.length) {
        const persona = personas[posicion];
        let info = `Nombre: ${persona.nombre}\n`;
        info += `Cédula: ${persona.cedula}\n`;
        info += `Fecha de Nacimiento: ${persona.fechaNacimiento}\n`;
        info += `Correo Electrónico: ${persona.correo}\n`;
        info += `Ciudad de Residencia: ${persona.ciudadResidencia}\n`;
        info += `Ciudad de Origen: ${persona.ciudadOrigen}\n`;
        info += `Canciones Favoritas:\n`;
        persona.cancionesFavoritas.forEach((cancion, index) => {
            info += `  ${index + 1}. Artista: ${cancion.artista}, Título: ${cancion.titulo}\n`;
        });
        alert(info);
    } else {
        alert("Posición no válida.");
    }
}

function menu() {
    const personas = [];
    
    while (true) {
        const opcion = prompt("Seleccione una opción:\nA. Agregar una persona\nB. Mostrar la información de una persona\nC. Salir").toUpperCase();
        
        switch (opcion) {
            case 'A':
                agregarPersona(personas);
                break;
            case 'B':
                mostrarPersona(personas);
                break;
            case 'C':
                alert("Saliendo del programa.");
                return;
            default:
                alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    }
}

// Ejecutar el programa
menu();
