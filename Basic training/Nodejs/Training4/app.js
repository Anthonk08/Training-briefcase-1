const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`El total de memoria es: ${totalMemory}`);

console.log(`El espacio de memoria libre es: ${freeMemory}`);