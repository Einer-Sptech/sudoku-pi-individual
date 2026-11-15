let nivelModal = require("../models/nivelModal");

function listar(res, res) {
    nivelModal.listar()
    .then(function (resultado){
        res.json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).send("Erro ao listar níveis.");
    });
}

module.exports = {
    listar
};