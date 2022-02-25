const db = require('../models');
const Paciente = db.paciente;
const Op = db.Sequelize.Op;

// Criamos um novo registro no banco de um médico
exports.create = (req, res) => {
    // Valida a requisição.
    if (!req.body.nome) {
        res.status(400).send({
            message: "Nome não pode ser vazio!"
        });
        return;
    }
    const paciente = {
        PAC_NOME: req.body.nome,
        PAC_FK_ID_PLA: req.body.plano,
        PAC_TELEFONE: req.body.telefone
    };
    Paciente.create(paciente)
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
    var condition = nome ? { PAC_NOME: { [Op.like]: `%${nome}%` } } : null;

    Paciente.findAll({ where: condition })
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

    Paciente.findByPk(id)
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

    Paciente.update(req.body, {
        where: { PAC_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Paciente Alterado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar o paciente com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar o paciente com o id=" + id
            });
        });
};

// Deleta um registro no banco de dados
exports.delete = (req, res) => {
    const id = req.params.id;

    Paciente.destroy({
        where: { PAC_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Paciente deletado com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar o paciente com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar do paciente com o id=" + id
            });
        });
};