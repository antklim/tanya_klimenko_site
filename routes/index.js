var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    behance: 'https://www.behance.net/tanya-klimenko',
    facebook: 'https://www.facebook.com/tannia.klimenko',
    instagram: 'https://www.instagram.com/sol_invictus233/',
    mailto: 'mailto:tannia.klimenko@gmail.com'
  });
});

module.exports = router;
