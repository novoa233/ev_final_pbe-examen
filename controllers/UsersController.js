const { json } = require('express/lib/response');
const connection = require('../config/db')
const utils = require('../resources/utils')
const jwt = require("jsonwebtoken")
const user = require("../models/users");
const User = require('../models/users');


const getUsers = (request,response) =>{
    connection.query(
        'SELECT id,name,lastname,email,web_page FROM users ',
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const searchUser = (request,response) =>{
    connection.query(
        `SELECT id,name,lastname FROM users where 
        name like "%${request.body.search}%" 
        or lastname like "%${request.body.search}%"`,
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const getUserById = (request,response) =>{
  connection.query(
      'SELECT id, name, lastname, email, web_page FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserNameById = (request,response) =>{
  connection.query(
      'SELECT  name FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserLastNameById = (request,response) =>{
  connection.query(
      'SELECT  lastname FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserEmailById = (request,response) =>{
  connection.query(
      'SELECT email FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserWebPageById = (request,response) =>{
  connection.query(
      'SELECT  web_page FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserDataById = (request,response) =>{
  const opc = ['id', 'name', 'lastname', 'email', 'web_page']
  connection.query(
      `SELECT  ${opc[request.body.field]} FROM users where id = ${request.body.id} `,
      function(err, results, fields) {
        response.json(results[0]); 
      }
    );
}
const createUser = (request,response) =>{
  connection.query(
      'insert into users(name,lastname,password,email,web_page) values (?,?,?,?,?) ',
      [
        request.body.name  ,
        request.body.lastname,
        utils.btoa(request.body.password),
        request.body.email,
        request.body.web_page,
      ],
      function(err, results, fields) {
        if (err){
          response.json({message:err})
        }else{
          response.json({message:"Exito!"})
        }
      }
    );
}
const login  = (request,response) =>{
  if((request.body.usuario == undefined)||(request.body.password == undefined)){
      response.status(400).json({message: "Debe proporcionar usuarios y password", state:false})
  }
  connection.query(
      'SELECT * FROM users where name = ? and password = ?',
      [
          request.body.usuario,
          utils.btoa(request.body.password)
      ],
      function(err, userResult, fields) {
          console.log(userResult)
           if(userResult.length >0){
              const user = userResult[0]
              const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
              response.json({
                  message:"Login Exitoso",
                  state :true, 
                  user_id:userResult[0].id,
                  accessToken
              });
          }else{
              response.json({message:"Login Fallido",state :false});
          }
      }
    );

}
const getSeqUser = (request,response) =>{
  User.findAll().then(users =>{
    response.json(users)
  }).catch(err => {
    response.json({error: `Se ha producido un error : ${err}`})
  })
}
const createSeqUser = (request,response) => {
  User.create({
    name : request.body.name,
    lastname : request.body.lastname,
    password : utils.btoa(request.body.password),
    email : request.body.email,
    web_page : request.body.web_page,
  }).then(res => {
    response.json({message: `Se ha creado el usuario : ${JSON.stringify(res)}`})
  }).catch(err => {
    response.json({message:`Se ha producido un error : ${err}`})
  })
}
module.exports = {
    getUsers,
    searchUser,
    getUserById,
    createUser,
    getUserNameById,
    getUserLastNameById,
    getUserEmailById,
    getUserWebPageById,
    getUserDataById,
    login,
    getSeqUser,
    createSeqUser,
}