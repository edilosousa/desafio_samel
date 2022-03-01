module.exports = (sequelize, Sequelize) => {
    const Agenda = sequelize.define("TBLAGENDA", {
      AGE_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      AGE_FK_ID_MED: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      AGE_DATA_DISPONIVEL: {
        type: Sequelize.DATE,
        allowNull: false
      },
      AGE_FK_ID_SALA: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      AGE_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      AGE_STATUS: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Agenda;
  };