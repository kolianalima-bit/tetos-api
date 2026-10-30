const { buscar } = require("../controlers/niveisControleller");

const rotas = require("express").Router();

rotas.get("/", buscar);

module.exports = rotas;