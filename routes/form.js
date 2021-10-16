var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form',{title: 'User Form', header: 'This is where the form goes',body:'TODO: Form Here'});
});

module.exports = router;
