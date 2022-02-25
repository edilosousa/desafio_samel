module.exports = (sequelize, Sequelize) => {
    const Especialidade = sequelize.define("TBLESPECIALIDADE", {
      ESP_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ESP_AREA: {
        type: Sequelize.STRING
      },
      ESP_DATA_CAD: {
        type: Sequelize.DATE
      },
      ESP_STATUS: {
        type: Sequelize.INTEGER
      }
    }, 
    { 
      freezeTableName: true,
      createdAt: false,
      updatedAt: false

    });
  
    return Especialidade;
  };