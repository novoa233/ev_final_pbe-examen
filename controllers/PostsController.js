const express = require('express')
const router = express.Router();
const Posts = require('../models/posts')

const newPost=(request,response) =>{

}
const getPosts=(request,response) => {
    Posts.findAll().then(posts =>{
        response.json(posts)
      }).catch(err => {
        response.json({error: `Se ha producido un error : ${err}`})
      })
}
module.exports ={
    newPost,
    getPosts,
}


