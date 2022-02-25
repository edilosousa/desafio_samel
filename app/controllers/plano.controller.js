const db = require('../models');
const Plano = db.plano;
const Op = db.Sequelize.Op;

// Criamos um novo registro no banco de um Plano
exports.create = (req, res) => {
    // Valida a requisição.
    if (!req.body.nome) {
        res.status(400).send({
            message: "Nome não pode ser vazio!"
        });
        return;
    }
    const plano = {
        PLA_NOME: req.body.nome,
    };
    Plano.create(plano)
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
    var condition = nome ? { PLA_NOME: { [Op.like]: `%${nome}%` } } : null;

    Plano.findAll({ where: condition })
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

    Plano.findByPk(id)
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

    Plano.update(req.body, {
        where: { PLA_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Plano Alterado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar o Plano com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar o Plano com o id=" + id
            });
        });
};

// Deleta um registro no banco de dados
exports.delete = (req, res) => {
    const id = req.params.id;

    Plano.destroy({
        where: { PLA_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Plano deletado com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar o Plano com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar o Plano com o id=" + id
            });
        });
};