var express = require("express");
var router = express.Router();
var partidaController = require("../controllers/partidaController");

router.post("/registrar", function(req, res){
    partidaController.registrar(req, res);
});

router.get("/listar/:idUsuario", function(req, res){
    partidaController.listarPorUsusario(req, res);
});

module.exports = router;