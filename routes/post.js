const express = require('express')
const router = express.Router();
const posts = require('../../cotrollers/PostsController')

router.post('/newPost',posts.newPost)
router.get('/getPosts',posts.getPosts)

module.exports = router