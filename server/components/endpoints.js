'use strict';

var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/manager', require('./manager'));

module.exports = router;
