const db = require('../models');
const Consulta = db.consulta;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Criamos um novo registro no banco de uma Agenda
exports.create = (req, res) => {
    const consulta = {
        CON_FK_ID_AGE: req.body.agenda,
        CON_FK_ID_PACIENTE: req.body.paciente
    };
    Consulta.create(consulta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erro ao criar um novo registro"
            });
        });
};

// Recupera todos os registros no banco de dados.
exports.findAll = async (req, res) => {
    const dt_ini = req.body.dt_ini;
    const dt_fin = req.body.dt_fin;
    const consultas = await db.sequelize.query(
        "SELECT c.CON_ID, m.MED_NOME as Médico, "+ 
        "e.ESP_AREA as Especialiidade, p.PAC_NOME as Paciente, "+
        "a.AGE_DATA_DISPONIVEL AS DATA_CONSULTA, "+
        "c.CON_DATA_ATENDIMENTO, "+
        "CASE c.CON_STATUS WHEN '1' then 'Consulta não realizada' "+
        "ELSE 'Consulta já realizada' "+
        "END AS Consulta "+
        "FROM tblconsulta c " +
        "INNER JOIN tblagenda a ON a.AGE_ID = c.CON_FK_ID_AGE " +
        "INNER JOIN tblpaciente p ON p.PAC_ID = c.CON_FK_ID_PACIENTE "+
        "INNER JOIN tblsala s ON s.SAL_ID = a.AGE_FK_ID_SALA "+
        "INNER JOIN tblmedico m ON m.MED_ID = a.AGE_FK_ID_MED "+
        "INNER JOIN tblespecialidade e ON e.ESP_ID = m.MED_FK_ID_ESP "+
        "WHERE a.AGE_DATA_DISPONIVEL between '"+dt_ini+"' AND '"+dt_fin+"'"
        , { type: QueryTypes.SELECT });
    return res.status(200).json(consultas)
};