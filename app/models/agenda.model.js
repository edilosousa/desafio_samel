module.exports = (sequelize, Sequelize) => {
    const Agenda = sequelize.define("TBLAGENDA", {
      AGE_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      AGE_FK_ID_MED: {
        type: Sequelize.INTEGER
      },
      AGE_DATA_DISPONIVEL: {
        type: Sequelize.DATE
      },
      AGE_FK_ID_SALA: {
        type: Sequelize.INTEGER
      },
      AGE_DATA_CAD: {
        type: Sequelize.DATE
      },
      AGE_STATUS: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Agenda;
  };