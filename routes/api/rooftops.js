const express = require('express');
const router = express.Router();
const rooftopsCtrl = require('../../controllers/api/rooftops');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, rooftopsCtrl.create);
router.get('/', ensureLoggedIn, rooftopsCtrl.index);

module.exports = router;