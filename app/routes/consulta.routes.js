module.exports = app => {
    const consultas = require("../controllers/consulta.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo consulta
    router.post("/", consultas.create);
  
    // Rota para listar todos os consulta
    router.get("/", consultas.findAll);

    // Rota para listar apenas um consulta
    router.get("/:id", consultas.findOne);

    // Rota de alteração do consulta
    router.put("/:id", consultas.update);

    // Rota para deletar o consulta
    router.delete("/:id", consultas.delete);

    app.use('/api/consultas', router);
  };