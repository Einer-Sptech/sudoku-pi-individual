let database = require("../database/config");


function cadastrar(nome, email, senha){
    let instrucaoSql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    return database.executar(instrucaoSql, [nome, email, senha]);
}

function autenticar(email, senha){
    let instrucaoSql = `SELECT id, nome, email, ativo, dt_criacao FROM usuarios WHERE email = ? AND senha = ?`;
    return database.executar(instrucaoSql, [email, senha]);
}

function atualizarNome(novoNome, idUsuario){
    let instrucaoSql = `UPDATE usuarios SET nome = ? WHERE id = ?`;
    return database.executar(instrucaoSql, [novoNome, idUsuario]);
}

module.exports = {
    cadastrar,
    autenticar,
    atualizarNome
};