module.exports = app => {
    const agendas = require("../controllers/agenda.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo agenda
    router.post("/", agendas.create);
  
    // Rota para listar todos os agenda
    router.get("/", agendas.findAll);

    // Rota para listar apenas um agenda
    router.get("/:id", agendas.findOne);

    // Rota de alteração do agenda
    router.put("/:id", agendas.update);

    // Rota para deletar o agenda
    router.delete("/:id", agendas.delete);

    app.use('/api/agendas', router);
  };