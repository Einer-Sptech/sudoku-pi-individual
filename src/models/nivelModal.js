let database = require("../database/config");

function listar(){
    let instrucaoSql = `SELECT id, nome, celulas_vazias FROM niveis`;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};