var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form',
  {
    title: 'Create New Post - Speak Up', 
    pageTitle: "Speak Up "

  });
  
});

module.exports = router;
