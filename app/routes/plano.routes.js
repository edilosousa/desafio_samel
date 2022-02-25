module.exports = app => {
    const planos = require("../controllers/plano.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo Plano
    router.post("/", planos.create);
  
    // Rota para listar todos os Plano
    router.get("/", planos.findAll);

    // Rota para listar apenas um Plano
    router.get("/:id", planos.findOne);

    // Rota de alteração do Plano
    router.put("/:id", planos.update);

    // Rota para deletar o Plano
    router.delete("/:id", planos.delete);

    app.use('/api/planos', router);
  };