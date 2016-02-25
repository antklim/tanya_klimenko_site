'use strict'

var _ = require('lodash');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  const data = {
    behance: 'https://www.behance.net/tanya-klimenko',
    facebook: 'https://www.facebook.com/tannia.klimenko',
    instagram: 'https://www.instagram.com/sol_invictus233/',
    mailto: 'mailto:tannia.klimenko@gmail.com'
  };

  _.extend(res.locals, data);
  next();
});

module.exports = router;
