const express = require('express');

const { pokemons, pokemon } = require('./pokemon');

const rotas = express();

rotas.get('/pokemon',pokemons);
rotas.get('/pokemon/:idOuNome',pokemon);

module.exports = rotas;


