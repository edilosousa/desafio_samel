module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define("TBLPACIENTE", {
      PAC_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      PAC_NOME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PAC_FK_ID_PLA: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      PAC_TELEFONE: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PAC_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      PAC_STATUS: {
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
  
    return Paciente;
  };