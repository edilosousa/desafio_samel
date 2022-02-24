const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const { Sequelize } = require('sequelize');

app.use(cors())
app.use(bodyParser.json())


const sequelize = new Sequelize('samel', 'edilo', 'edilo123', {
    host: '172.17.0.2',
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.listen(port, () => {
    console.log(`Server NodeJS rodando no endereço http://localhost:${port}`)
})




