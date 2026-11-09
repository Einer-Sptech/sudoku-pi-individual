let usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res){
    let nome = req.body.nomeServer;
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if(nome == undefined){
        res.status(400).send("Seu nome está undefined!");
    }else if(email == undefined){
        res.status(400).send("Seu email está undefined!");
    }else if(senha == undefined){
        res.status(400).send("Sua senha está undefined!");
    }else{
        usuarioModel.cadastrar(nome, email, senha)
            .then(function (resultado){
                res.json(resultado);
            })
            .catch(function (erro){
                console.log(erro);
                if(erro.code == "ER_DUP_ENTRY"){
                    res.status(409).send("Esse usúario ou e-mail já está cadastrado!");
                }else{
                    res.status(500).send("Erro ao cadastrar. Tente novamente.");
                }
                
            });
    }
}

function autenticar (req, res){
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("Seu email está undefined!");
    }else if(senha == undefined){
        res.status(400).send("Sua senha está undefined!");
    }else{
        usuarioModel.autenticar(email, senha)
        .then(function (resultado){
            if(resultado.length == 1){
                res.json(resultado[0]);
            }else{
                res.status(403).send("E-mail ou senha incorretas!");
            }
        })
        .catch(function (erro){
            console.log(erro);
            res.status(500).send("Erro ao fazer login. Tente novamente.");
        });
    }
}

module.exports = {
    cadastrar,
    autenticar
}