module.exports = app => {
    const consultas = require("../controllers/consulta.controller");
  
    var router = require("express").Router();
  
    // Rota para Criar um novo consulta
    router.post("/", consultas.create);
  
    // Rota para listar todos as consulta
    router.get("/", consultas.findAll);

    // Rota para confirmar a consulta ao paciente
    router.post("/realizar-consulta", consultas.realizar);

    app.use('/api/consultas', router);
  };