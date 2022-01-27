const { v4 } = require('uuid');
const { getConnection } = require('../database');

// Fecha actual
const today = new Date();
const dateNow = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const getProductos = (req, res) => {
  const productos = getConnection().get('productos').value();
  res.json(productos);
};

const getProducto = (req, res) => {
  const producto = getConnection().get('productos').find({ id: req.params.id }).value();
  res.json(producto);
};

const createProducto = (req, res) => {
  const newProducto = {
    id: v4(),
    name: req.body.name,
    price: req.body.price,
    listaDeCategorias: req.body.lista_de_categorias,
    description: req.body.description,
    createDate: dateNow,
  };
  getConnection().get('productos').push(newProducto).write();
  res.send(newProducto);
};

const updateProducto = async (req, res) => {
  const result = await getConnection().get('productos').find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(result);
};

const deleteProducto = (req, res) => {
  const result = getConnection().get('productos').remove({ id: req.params.id }).write();
  res.json(`El producto ha sido borrado! ${result}`);
};

module.exports = {
  getProductos,
  createProducto,
  getProducto,
  updateProducto,
  deleteProducto,
};