import mongoose from 'mongoose';
import express from 'express';
import usuarios from './routes/usuarios.js';
import productos from './routes/productos.js';
import ventas from './routes/ventas.js';

const app = express();

mongoose
  .connect('mongodb://localhost/crudUsuariosAndProducts')
  .then(() => console.log('Conectando a la base de datos de MongoDB...'))
  .catch(err => console.error('No se ha podido conectar a MongoDB...', err));

app.use(express.json());
app.use('/api/usuarios', usuarios);
app.use('/api/productos', productos);
app.use('/api/ventas', ventas);

const port = 3000;
app.listen(port, () => console.log(`El puerto ${port}, inicio correctamente!...`));
