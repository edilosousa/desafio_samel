module.exports = app => {
    const pacientes = require("../controllers/paciente.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo Paciente
    router.post("/", pacientes.create);
  
    // Rota para listar todos os Paciente
    router.get("/", pacientes.findAll);

    // Rota para listar apenas um Paciente
    router.get("/:id", pacientes.findOne);

    // Rota de alteração do Paciente
    router.put("/:id", pacientes.update);

    // Rota para deletar o Paciente
    router.delete("/:id", pacientes.delete);

    app.use('/api/pacientes', router);
  };