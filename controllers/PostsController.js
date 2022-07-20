const express = require('express')
const router = express.Router();
const Posts = require('../models/posts')

const newPost=(request,response) =>{

}
const getPost=(request,response) => {
    Posts.findAll().then(posts =>{
        response.json(post)
      }).catch(err => {
        response.json({error: `Se ha producido un error : ${err}`})
      })
}

const getPostByUser = (request,response) =>{
  const opc = ['post']
  connection.query(
      `SELECT  ${opc[request.body.field]} FROM post where user = ${request.body.user} `,
      function(err, results, fields) {
        response.json(results[0]); 
      }
    );
}

const getPostByTopic = (request,response) =>{
  const opc = ['post']
  connection.query(
      `SELECT  ${opc[request.body.field]} FROM post where topic = ${request.body.topic} `,
      function(err, results, fields) {
        response.json(results[0]); 
      }
    );
}

module.exports ={
    newPost,
    getPost,
    getPostByUser
    getPostByTopic,
}


