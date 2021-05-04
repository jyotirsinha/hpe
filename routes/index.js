const express = require('express');
// const app = express();
const router = express.Router();
const homeController = require("../controllers/home_controller");


router.get('/', homeController.home);
router.use('/profile', require('./user'));
router.use('/post', require('./post'));


module.exports = router;