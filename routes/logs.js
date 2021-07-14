var express = require('express');
var router = express.Router();
const logsCtrl = require('../controllers/logs');

router.get('/', logsCtrl.index);
router.get('/new', logsCtrl.new);
router.get('/:id', logsCtrl.show);
router.post('/', logsCtrl.create);
router.delete('/:id', logsCtrl.delete);
router.get('/:id/edit', logsCtrl.edit);
router.put('/:id', logsCtrl.update);

module.exports = router;