
const db = require('../models');
const Consulta = db.consulta;
const Op = db.Sequelize.Op;

// Criamos um novo registro no banco de uma Agenda
exports.create = (req, res) => {
    const consulta = {
        CON_FK_ID_AGE : req.body.agenda,
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
exports.findAll = (req, res) => {
    const nome = req.body.nome;
    var condition = nome ? { ESP_AREA: { [Op.like]: `%${nome}%` } } : null;

    Agenda.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erro ao buscar os registro"
            });
        });
};

// Buscar apenas um registro no corpo da requisição por um parametro
exports.findOne = (req, res) => {
    const id = req.params.id;

    Agenda.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error ao buscar com o id=" + id
            });
        });
};

// Altera um registro no banco de dados.
exports.update = (req, res) => {
    const id = req.params.id;

    Agenda.update(req.body, {
        where: { ESP_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Agenda Alterada com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar a Agenda com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar a Agenda com o id=" + id
            });
        });
};

// Deleta um registro no banco de dados
exports.delete = (req, res) => {
    const id = req.params.id;

    Agenda.destroy({
        where: { ESP_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Agenda deletada com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar a Agenda com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar a Agenda com o id=" + id
            });
        });
};