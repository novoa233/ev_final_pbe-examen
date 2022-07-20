const express = require('express')
const router = express.Router();
const posts = require('../../cotrollers/PostsController')

router.post('/newPost',post.newPost)
router.get('/getPosts',post.getPosts)
router.get('/getPostByUser',post.getPostByUser)
router.get('/getPostByTopic',post.getPostByTopic)
module.exports = router