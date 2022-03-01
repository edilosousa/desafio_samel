const db = require('../models');
const Medico = db.medico;
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
    const medico = {
        MED_NOME: req.body.nome,
        MED_FK_ID_ESP: req.body.especialidade,
        MED_UF: req.body.uf,
        MED_CRM: req.body.crm,
    };
    Medico.create(medico)
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
    var condition = nome ? { MED_NOME: { [Op.like]: `%${nome}%` } } : null;

    Medico.findAll({ where: condition })
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

    Medico.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error ao buscar com o id=" + id
            });
        });
};

exports.findMedCrm = (req, res) => {
    const crm = req.params['crm'];
    var condition = crm ? { MED_CRM: { [Op.like]: `%${crm}%` } } : null;

    Medico.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erro ao buscar os registro"
            });
        });
}
// Altera um registro no banco de dados.
exports.update = (req, res) => {
    const id = req.params.id;

    Medico.update(req.body, {
        where: { MED_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Médico Alterado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não pode alterar o médico com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro alterar o médico com o id=" + id
            });
        });
};

// Deleta um registro no banco de dados
exports.delete = (req, res) => {
    const id = req.params.id;

    Medico.destroy({
        where: { MED_ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Médico deletado com sucesso"
                });
            } else {
                res.send({
                    message: `Não foi possivel delatar o médico com o id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não é possivel deletar do médico com o id=" + id
            });
        });
};