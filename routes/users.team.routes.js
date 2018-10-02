let express = require('express');
let router = express.Router();
const controller = require('../controllers/usersTeam.controller');


router.route('/')
.post(controller.post)
.get(controller.get)

module.exports = router;