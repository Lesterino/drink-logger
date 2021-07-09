var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.get('/', ingredientsCtrl.index);
router.post('/new', ingredientsCtrl.new);

module.exports = router;