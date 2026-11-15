let partidaModel = require("../models/partidaModel");

function registrar(req,res){
    let fkUsuario = req.body.fkUsuarioServer;
    let fkNivel = req.body.fkNivelServer;
    let fkStatus = req.body.fkStatusServer;
    let tempoSeg = req.body.tempoSegServer;
    let erros = req.body.errosServer;
    let dicas = req.body.dicasServer;

    if(fkUsuario == undefined || fkNivel == undefined || fkStatus == undefined || tempoSeg == undefined){
        res.status(400).send("Dados obrigatórios incompletos!");
    }else{
        partidaModel.registrar(fkUsuario, fkNivel, fkStatus, tempoSeg, erros || 0, dicas || 0)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).send("Erro ao registrar partida.");
        });
    }
}

function listarPorUsusario(req, res){
    let idUsuario = req.params.idUsuario;

    partidaModel.listarPorUsusario(idUsuario)
    .then(function (resultado){
        res.json(resultado);
    })
    .catch(function (erro){
        console.log(erro);
        res.status(500).send("Erro ao buscar partidas.");
    });
}

module.exports = {
    registrar,
    listarPorUsusario
}