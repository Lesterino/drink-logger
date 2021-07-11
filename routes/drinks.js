var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks')

router.get('/', drinksCtrl.index);
// router.get('/new', drinksCtrl.new);
// router.post('/', drinksCtrl.create);
// router.get('/:id', drinksCtrl.show);

module.exports = router;
