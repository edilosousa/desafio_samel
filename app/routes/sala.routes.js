module.exports = app => {
    const salas = require("../controllers/sala.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo sala
    router.post("/", salas.create);
  
    // Rota para listar todos os sala
    router.get("/", salas.findAll);

    // Rota para listar apenas um sala
    router.get("/:id", salas.findOne);

    // Rota de alteração do sala
    router.put("/:id", salas.update);

    // Rota para deletar o sala
    router.delete("/:id", salas.delete);

    app.use('/api/salas', router);
  };