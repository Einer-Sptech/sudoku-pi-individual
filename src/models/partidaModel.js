let database = require("../database/config");

function registrar(fkUsuario, fkNivel, fkStatus, tempoSeg, erros, dicas, dtInicio){
    let instrucaoSql = `
    INSERT INTO partidas (fk_usuario, fk_nivel, fk_status, tempo_seg, erros, dicas) VALUES
    (?, ?, ?, ?, ?, ?)`;
    return database.executar(instrucaoSql, [fkUsuario, fkNivel, fkStatus, tempoSeg, erros, dicas]);
}

function listarPorUsusario(idUsuario){
    let instrucaoSql = `
    SELECT p.id, n.nome as nivel, s.nome as status, p.tempo_seg, p.erros, p.dicas, p.dt_inicio 
    FROM partidas p
    JOIN niveis n ON p.fk_nivel = n.id
    JOIN status_partida s ON p.fk_status = s.id
    WHERE p.fk_usuario = ?`;
    
    return database.executar(instrucaoSql, [idUsuario]);
}

module.exports = {
    registrar,
    listarPorUsusario
}