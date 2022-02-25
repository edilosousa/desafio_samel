
const db = require('../models');
const Especialidade = db.especialidade;
const Op = db.Sequelize.Op;

// Criamos um novo registro no banco de uma especialidade
exports.create = (req, res) => {
    // Valida a requisição.
    if (!req.body.nome) {
        res.status(400).send({
            message: "Nome não pode ser vazio!"
        });
        return;
    }
    const especialidade = {
        ESP_AREA: req.body.nome,
    };
    Especialidade.create(especialidade)
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

    Especialidade.findAll({ where: condition })
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

    Especialidade.findByPk(id)
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

    Especialidade.update(req.body, {
        where: { ESP_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Especialidade Alterada com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar a Especialidade com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar a Especialidade com o id=" + id
            });
        });
};

// Deleta um registro no banco de dados
exports.delete = (req, res) => {
    const id = req.params.id;

    Especialidade.destroy({
        where: { ESP_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Especialidade deletada com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar a Especialidade com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar a Especialidade com o id=" + id
            });
        });
};