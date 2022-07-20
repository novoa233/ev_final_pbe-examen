const express = require('express')
const router = express.Router();
const topic = require('../../cotrollers/TopicController')
router.post('/createTopic', topic.createTopic)
router.post('/readTopic', topic.readTopic)
router.post('/updateTopic', topic.updateTopic)
router.post('/deleteTopic', topic.deleteTopic)

module.exports = router