const express = require('express')
const router = express.Router();
const main = require('../../cotrollers/MainController')

router.post('/getName',main.getName)
router.post('/getFullName',main.getFullName)
router.put('/putName',main.putName)
router.patch('/patchName',main.patchName)
router.delete('/deleteName',main.deleteName)
router.post('/reverse',main.reverse)
module.exports = router
