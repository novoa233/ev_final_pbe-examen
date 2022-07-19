const express = require('express')
const app = express()
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelizeConfig')
require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//server listen
app.use('/', router);
app.listen(3000,() =>{
    sequelize.sync({force:false}).then(()=>{
        console.log('Se ha iniciado sequelize con éxtito')
    }).catch(err =>{
        console.log(`Se ha producido un error en la inicializacion de sequelize: ${err}`)
    })
    console.log('Escuchando en el puerto 3000')
})
