const path = require('path');

console.log(path);

console.log(path.sep);

// Path basa su accionar en el sistema operativo que se esté corriendo el código
// como pudimos ver con os, node puede detectar el SO del equipo y adaptar sus rutas y funcionamiento a este
let filePath = path.join('documents','media','software','correct.js')

//Este basemame solo retornara el nombre y tipo del archivo base, el ultimo deldirectorio provisto
console.log(path.basename(filePath));
//Este por el contrario devuelve solo el directorio en el que se encuentra
console.log(path.dirname(filePath));
//Este por ultimo devuelve la informacion en forma de objeto
console.log(path.parse(filePath));
//ahpra mostremos la info en manera de tabla para entender mejor
console.table({
    basename: path.basename(filePath),
    dirname: path.dirname(filePath),
    parse: path.parse(filePath)
})
//este ultimo resuelve la ruta como si fuera en esta carpeta
console.log(path.resolve('dist'));