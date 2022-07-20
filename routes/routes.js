const express = require('express')
const router = express.Router();
const MainRoutes = require('../routes/Main/main')
const TopicRoutes = require('../routes/Topic/topic')
const UserRoutes = require('../routes/User/user')
const PostsRoutes = require('../routes/Post/post')
const auth = require('../middleware/authenticate')

    

router.use('/main', MainRoutes);
router.use('/topic', TopicRoutes);
router.use('/user', UserRoutes);
router.use('/post', PostsRoutes);

module.exports = router
