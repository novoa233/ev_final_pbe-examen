const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelizeConfig')

class Topics extends Model{}
Topics.init({
    id :{
        type: DataTypes.INTEGER,
        primaryKey:true
    },	                                //int(11)
    user_id	: DataTypes.INTEGER ,        //int(11)
    title :DataTypes.STRING,         	//varchar(100)
    content:DataTypes.STRING,	//varchar(500)
    date : DataTypes.DATE,	//datetime
},
{
    sequelize,
    modelName:"Topics",
})

module.exports = Topics