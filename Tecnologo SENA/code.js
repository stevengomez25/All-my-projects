function main() {
    const edades = [];
    const numPersonas = 10;
    const edadMinima = 1;
    const edadMaxima = 120;
    const edadAdultoMayor = 60;
    let menoresDeEdad = 0;
    let mayoresDeEdad = 0;
    let adultosMayores = 0;
    let sumaEdades = 0;

    for (let i = 0; i < numPersonas; i++) {
        let edad;
        while (true) {
            edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1} (entre ${edadMinima} y ${edadMaxima} años):`), 10);
            if (edad >= edadMinima && edad <= edadMaxima) {
                break;
            } else {
                alert(`Valor no válido. Por favor, ingrese una edad entre ${edadMinima} y ${edadMaxima} años.`);
            }
        }
        edades.push(edad);
        sumaEdades += edad;

        if (edad < 18) {
            menoresDeEdad++;
        } else if (edad >= edadAdultoMayor) {
            adultosMayores++;
        } else {
            mayoresDeEdad++;
        }
    }

    const edadMasBaja = Math.min(...edades);
    const edadMasAlta = Math.max(...edades);
    const promedioEdades = sumaEdades / numPersonas;

    div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <h1>Resultados:</h1>
    <h2>Cantidad de personas menores de edad: ${menoresDeEdad}</h2>
    <h2>Cantidad de personas mayores de edad: ${mayoresDeEdad}</h2>
    <h2>Cantidad de adultos mayores: ${adultosMayores}</h2>
    <h2>La edad más baja es: ${edadMasBaja}</h2>
    <h2>La edad más alta es: ${edadMasAlta}</h2>
    <h2>El promedio de edades es: ${promedioEdades.toFixed(2)}</h2>
    `
}

// Ejecutar el programa
main();
