module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define("TBLPACIENTE", {
      PAC_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      PAC_NOME: {
        type: Sequelize.STRING
      },
      PAC_FK_ID_PLA: {
        type: Sequelize.INTEGER
      },
      PAC_TELEFONE: {
        type: Sequelize.STRING
      },
      PAC_DATA_CAD: {
        type: Sequelize.DATE
      },
      PAC_STATUS: {
        type: Sequelize.INTEGER
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Paciente;
  };