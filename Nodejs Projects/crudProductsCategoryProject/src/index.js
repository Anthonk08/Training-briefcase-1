const app = require('./app');
const { createConnection } = require('./database');

createConnection();
const port = 5000;
app.listen(port, () => console.log(`El servcidor ${port}, funciona bien!`));