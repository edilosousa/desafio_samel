module.exports = app => {
    const especialidades = require("../controllers/especialidade.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo Especialidade
    router.post("/", especialidades.create);
  
    // Rota para listar todos os Especialidade
    router.get("/", especialidades.findAll);

    // Rota para listar apenas um Especialidade
    router.get("/:id", especialidades.findOne);

    // Rota de alteração do Especialidade
    router.put("/:id", especialidades.update);

    // Rota para deletar o Especialidade
    router.delete("/:id", especialidades.delete);

    app.use('/api/especialidades', router);
  };