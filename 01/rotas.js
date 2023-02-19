const express = require('express');

const { procurar, detalharProduto , calcularFrete } = require('./teste');


const rotas = express();

rotas.get('/produtos',procurar);
rotas.get('/produtos/:id',detalharProduto);
rotas.get('/produtos/:id/frete/:cep',calcularFrete);

module.exports = rotas;