var express = require('express');
var router = express.Router();

let messages = [
  {
    text:"I love this website",
    name:"Tyler",
    date: new Date()
  },
  {
    text:"Hello World!",
    name:"Estelle",
    date: new Date()
  },
  {
    text:"I can't wait to see what else this site can do",
    name:"Taylor",
    date: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Speak Up', pageTitle: 'Speak Your Mind', messages: messages });
});

router.post("/new",(req,res)=>{
  let newMessage={
    name: req.body.name,
    text: req.body.text,
    date: new Date()
  };

  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
