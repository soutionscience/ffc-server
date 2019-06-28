let express = require('express');
let router = express.Router();
let controller = require('../controllers/feedback.controller');


router.route('/')
.post(controller.post)
.get(controller.get)

router.route(':/')
.get(controller.getOne)


module.exports = router;