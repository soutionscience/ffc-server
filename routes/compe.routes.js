let express = require('express');
let router = express.Router();
let controller = require('../controllers/competitions.controller');


router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.deleteAll)


router.route('/:compeId/teams')
 .post(controller.postUser)


module.exports = router;
