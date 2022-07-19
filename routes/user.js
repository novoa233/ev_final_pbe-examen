const express = require('express')
const router = express.Router();
const users = require('../../cotrollers/UsersController')
//UsersController
router.post('/getUsers',users.getUsers)
router.post('/searchUser',users.searchUser)
router.post('/getUserById',users.getUserById)
router.post('/createUser',users.createUser)
router.post('/getUserNameById', users.getUserNameById)
router.post('/getUserLastNameById', users.getUserLastNameById)
router.post('/getUserEmailById', users.getUserEmailById)
router.post('/getUserWebPageById', users.getUserWebPageById)
router.post('/getUserDataById', users.getUserDataById)
router.post('/login', users.login)
router.get('/getSeqUser', users.getSeqUser)
router.post('/createSeqUser', users.createSeqUser)


module.exports = router