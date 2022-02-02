//El pathmódulo proporciona utilidades para trabajar con rutas de archivos y directorios
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);