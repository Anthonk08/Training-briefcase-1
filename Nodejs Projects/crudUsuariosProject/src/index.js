const express = require('express');
// const router = require('../routes/usuarios');

// Middleware
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`El puerto ${port}, inicio correctamente!`);
});
