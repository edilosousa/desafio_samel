module.exports = (sequelize, Sequelize) => {
    const Medico = sequelize.define("TBLMEDICO", {
      MED_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      MED_NOME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      MED_FK_ID_ESP: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      MED_UF: {
        type: Sequelize.STRING,
        allowNull: false
      },
      MED_CRM: {
        type: Sequelize.STRING,
        allowNull: false
      },
      MED_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      MED_STATUS: {
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
  
    return Medico;
  };