const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
var bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())

const db = require('./app/models')
db.sequelize.sync()

require('./app/routes/medico.routes')(app)
require('./app/routes/paciente.routes')(app)
require('./app/routes/plano.routes')(app)
require('./app/routes/especialidade.routes')(app)

app.listen(port, () => {
    console.log(`Server NodeJS rodando no endereço http://localhost:${port}`)
})




