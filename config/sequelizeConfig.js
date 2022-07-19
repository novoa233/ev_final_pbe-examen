const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'cft',
    'root',
    'root',
    {
        host: 'localhost',
        dialect : 'mysql'
    }
)
module.exports = sequelize

