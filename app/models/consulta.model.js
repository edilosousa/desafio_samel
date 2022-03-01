module.exports = (sequelize, Sequelize) => {
    const Consulta = sequelize.define("TBLCONSULTA", {
      CON_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      CON_FK_ID_AGE: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      CON_FK_ID_PACIENTE: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      CON_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      CON_DATA_ATENDIMENTO: {
        type: Sequelize.DATE,
        allowNull: true 
      },
      CON_STATUS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Consulta;
  };