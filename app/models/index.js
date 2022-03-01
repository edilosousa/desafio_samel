const dbConfig = require('../db-config/db.config');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    timezone: "-04:00",
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.medico = require("./medico.model.js")(sequelize, Sequelize);
db.paciente = require("./paciente.model.js")(sequelize, Sequelize);
db.especialidade = require("./especialidade.model.js")(sequelize, Sequelize);
db.plano = require("./plano.model.js")(sequelize, Sequelize);
db.agenda = require("./agenda.model.js")(sequelize, Sequelize);
db.sala = require("./sala.model.js")(sequelize, Sequelize);
db.consulta = require("./consulta.model.js")(sequelize, Sequelize);

module.exports = db;