const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelizeConfig')

class User extends Model{}
User.init(
    {
        id	: {
                type:DataTypes.INTEGER,
                primaryKey:true
            },                        //int(11)
        name : DataTypes.STRING,                  //varchar(45)
        lastname: DataTypes.STRING,	                //varchar(45)
        password : DataTypes.STRING	,                //text
        email : DataTypes.STRING,	                    //varchar(45)
        web_page : DataTypes.STRING,	                //varchar(45)
    },
    {
        sequelize,
        modelName:"User",
    }
)

module.exports = User