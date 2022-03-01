module.exports = (sequelize, Sequelize) => {
    const Plano = sequelize.define("TBLPLANO", {
      PLA_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      PLA_NOME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PLA_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      PLA_STATUS: {
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
  
    return Plano;
  };