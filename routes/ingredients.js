var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.get('/', ingredientsCtrl.index);
// router.get('/new', ingredientsCtrl.new);
// router.post('/', ingredientsCtrl.create);
// router.get('/:id', drinksCtrl.show);

module.exports = router;