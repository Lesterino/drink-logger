var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.get('/', ingredientsCtrl.index);
router.get('/new', ingredientsCtrl.new);
router.get('/:id', ingredientsCtrl.show);
router.post('/', ingredientsCtrl.create);
router.delete('/:id', ingredientsCtrl.delete);
router.get('/:id/edit', ingredientsCtrl.edit);
router.put('/:id', ingredientsCtrl.update);

module.exports = router;