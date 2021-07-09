var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks')

router.get('/', drinksCtrl.index);
router.new('/new', drinksCtrl.new);

module.exports = router;
