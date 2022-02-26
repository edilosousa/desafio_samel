module.exports = (sequelize, Sequelize) => {
    const Medico = sequelize.define("TBLMEDICO", {
      MED_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      MED_NOME: {
        type: Sequelize.STRING
      },
      MED_FK_ID_ESP: {
        type: Sequelize.INTEGER
      },
      MED_UF: {
        type: Sequelize.STRING
      },
      MED_CRM: {
        type: Sequelize.STRING
      },
      MED_DATA_CAD: {
        type: Sequelize.DATE
      },
      MED_STATUS: {
        type: Sequelize.INTEGER
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Medico;
  };