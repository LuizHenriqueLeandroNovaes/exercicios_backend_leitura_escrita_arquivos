const express = require('express');

const { gerenciarEndereco
} = require('..bancodedados/produtos');

rotas.get('/',gerenciarEndereco);


module.exports = rotas;