let database = require("../database/config");


function cadastrar(nome, email, senha){
    let instrucaoSql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    return database.executar(instrucaoSql, [nome, email, senha]);
}

function autenticar(email, senha){
    let instrucaoSql = `SELECT id, nome, email FROM usuarios WHERE email = ? AND senha = ?`;
    return database.executar(instrucaoSql, [email, senha]);
}

module.exports = {
    cadastrar,
    autenticar
};