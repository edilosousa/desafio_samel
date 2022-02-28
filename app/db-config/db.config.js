module.exports = {
    HOST: "localhost",
    USER: "root",
    PORT: "3307",
    PASSWORD: "",
    DB: "samel",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };