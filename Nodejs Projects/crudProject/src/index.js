// Exporto de estos archivos las funcione so metodos que necesito
const app = require('./app');
const { createConnection } = require('./database');

// Inicio la base de datos
createConnection();

// Inicio el servidor
const port = 3000;
app.listen(port, () => console.log(`El servidor ${port} funciona correctamente!`));