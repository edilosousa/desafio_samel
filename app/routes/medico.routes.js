module.exports = app => {
    const medicos = require("../controllers/medico.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo Médico
    router.post("/", medicos.create);
  
    // Rota para listar todos os Médicos
    router.get("/", medicos.findAll);

    // Rota para listar apenas um Médico
    router.get("/:id", medicos.findOne);

    // Rota de alteração do Médico
    router.put("/:id", medicos.update);

    // Rota para deletar o Médico
    router.delete("/:id", medicos.delete);

    app.use('/api/medicos', router);
  };