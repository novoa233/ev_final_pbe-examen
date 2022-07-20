const express = require('express')
const router = express.Router();
const users = require('../../cotrollers/UsersController')
//UsersController
router.post('/getUsers',users.getUsers)
router.post('/createUser',users.createUser)
router.post('/updateUser',users.updateteUser)
router.post('/deleteUser',user.deleteUser)
router.post('/login', users.login)
router.get('/getSeqUser', users.getSeqUser)
router.post('/createSeqUser', users.createSeqUser)


module.exports = router