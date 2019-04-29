let express = require('express');
let router = express.Router();
const controller = require('../controllers/winner.controller.js');


router.route('/:id')
.post(controller.getWinner)



module.exports = router;