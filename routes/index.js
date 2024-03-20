var express = require('express');
var router = express.Router();
var portc = 3000

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nguyễn Minh Nhựt' });
});

module.exports = router;
