module.exports = (sequelize, Sequelize) => {
    const Consulta = sequelize.define("TBLCONSULTA", {
      CON_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      CON_FK_ID_AGE: {
        type: Sequelize.INTEGER
      },
      CON_FK_ID_PACIENTE: {
        type: Sequelize.INTEGER
      },
      CON_DATA_CAD: {
        type: Sequelize.DATE
      },
      CON_STATUS: {
        type: Sequelize.INTEGER,
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