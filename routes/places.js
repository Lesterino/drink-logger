var express = require('express');
var router = express.Router();
const placesCtrl = require('../controllers/places')

router.get('/', placesCtrl.index);
router.get('/new', placesCtrl.new);
router.get('/:id', placesCtrl.show);
router.post('/', placesCtrl.create);
router.delete('/:id', placesCtrl.delete);
router.get('/:id/edit', placesCtrl.edit);
router.put('/:id', placesCtrl.update);

module.exports = router;