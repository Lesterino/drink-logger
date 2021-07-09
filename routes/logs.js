var express = require('express');
var router = express.Router();
const logsCtrl = require('../controllers/logs');


router.get('/', logsCtrl.index);
router.get('/new', logsCtrl.new);
router.post('/', logsCtrl.create);

module.imports = router;