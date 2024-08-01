function leerVector(tamano, numeroVector) {
    const vector = [];
    for (let i = 0; i < tamano; i++) {
        let numero;
        while (true) {
            numero = parseInt(prompt(`Ingrese el número ${i + 1} para el vector ${numeroVector} (debe ser mayor o igual al anterior):`), 10);
            if (i === 0 || numero >= vector[i - 1]) {
                break;
            } else {
                alert(`Valor no válido. Por favor, ingrese un número mayor o igual al anterior.`);
            }
        }
        vector.push(numero);
    }
    return vector;
}

function mezclarVectores(vector1, vector2) {
    const resultado = [];
    let i = 0, j = 0;
    
    while (i < vector1.length && j < vector2.length) {
        if (vector1[i] < vector2[j]) {
            resultado.push(vector1[i]);
            i++;
        } else {
            resultado.push(vector2[j]);
            j++;
        }
    }

    // Agregar los elementos restantes de vector1 (si los hay)
    while (i < vector1.length) {
        resultado.push(vector1[i]);
        i++;
    }

    // Agregar los elementos restantes de vector2 (si los hay)
    while (j < vector2.length) {
        resultado.push(vector2[j]);
        j++;
    }

    return resultado;
}

function main() {
    const tamano = 5;
    const vector1 = leerVector(tamano, 1);
    const vector2 = leerVector(tamano, 2);

    const vectorMezclado = mezclarVectores(vector1, vector2);
    div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <h2>Vector 1: ${vector1}</h2>
    <h2>Vector 2: ${vector2}</h2>
    <h2>Vector mezclado: ${vectorMezclado}</h2>
    `
}

// Ejecutar el programa
main();


