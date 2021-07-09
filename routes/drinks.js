var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks')

/* GET users listing. */
router.get('/', drinksCtrl.index);
module.exports = router;
