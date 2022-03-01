module.exports = (sequelize, Sequelize) => {
    const Sala = sequelize.define("TBLSALA", {
      SAL_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      SAL_NOME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SAL_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      SAL_STATUS: {
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
  
    return Sala;
  };