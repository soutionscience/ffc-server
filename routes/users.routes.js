var express = require('express');
var router = express.Router();
let controller = require('../controllers/users.controller')

/* GET users listing. */
router.route('/')
.get(controller.get)
.post(controller.post)

router.route('/:id')
.post(controller.postTeam)



module.exports = router;
