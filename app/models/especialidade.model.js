module.exports = (sequelize, Sequelize) => {
    const Especialidade = sequelize.define("TBLESPECIALIDADE", {
      ESP_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ESP_AREA: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ESP_DATA_CAD: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      ESP_STATUS: {
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
  
    return Especialidade;
  };