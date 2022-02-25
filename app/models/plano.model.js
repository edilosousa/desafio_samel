module.exports = (sequelize, Sequelize) => {
    const Plano = sequelize.define("TBLPLANO", {
      PLA_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      PLA_NOME: {
        type: Sequelize.STRING
      },
      PLA_DATA_CAD: {
        type: Sequelize.DATE
      },
      PLA_STATUS: {
        type: Sequelize.INTEGER
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Plano;
  };