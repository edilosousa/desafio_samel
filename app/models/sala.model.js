module.exports = (sequelize, Sequelize) => {
    const Sala = sequelize.define("TBLSALA", {
      SAL_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      SAL_NOME: {
        type: Sequelize.STRING
      },
      SAL_DATA_CAD: {
        type: Sequelize.DATE
      },
      SAL_STATUS: {
        type: Sequelize.INTEGER
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Sala;
  };