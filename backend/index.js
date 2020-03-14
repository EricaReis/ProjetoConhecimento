const app = require('express')()
const consign = require('consign')

app.listen(3000, () => {
    console.log('***backend executando!***');
})

const db = require('./config/db')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
