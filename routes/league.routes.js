let express = require('express');
let router = express.Router();
const controller = require('../controllers/League.controller');


router.route('/')
.get(controller.get)
.post(controller.post)
.delete(controller.deleteAll)

// router.route('/:etherId')
// .get(controller.getOne)


module.exports = router;
