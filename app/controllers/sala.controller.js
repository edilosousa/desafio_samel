
const db = require('../models');
const Sala = db.sala;
const Op = db.Sequelize.Op;

// Criamos um novo registro no banco de uma Sala
exports.create = (req, res) => {
    // Valida a requisição.
    if (!req.body.data) {
        res.status(400).send({
            message: "Data não pode ser vazio!"
        });
        return;
    }
    const sala = {
        AGE_DATA_DISPONIVEL: req.body.data,
        AGE_FK_ID_MED: req.body.medico
    };
    Sala.create(sala)
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

    Sala.findAll({ where: condition })
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

    Sala.findByPk(id)
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

    Sala.update(req.body, {
        where: { ESP_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sala Alterada com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar a Sala com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar a Sala com o id=" + id
            });
        });
};

// Deleta um registro no banco de dados
exports.delete = (req, res) => {
    const id = req.params.id;

    Sala.destroy({
        where: { ESP_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sala deletada com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar a Sala com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar a Sala com o id=" + id
            });
        });
};