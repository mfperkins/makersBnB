var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res) {
  res.render('create_space', {h1: 'List a space'});
});

router.get('/', function(req, res){
  models.Space.findAll().then(function(space){
    res.render('spaces', {
      h1: 'Spaces',
      title: space.title,
      description: space.description,
      price: space.price,
      availability: space.availability
    });
});

router.post('/', function(req, res, next){
  models.Space.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    availability: req.body.availability,
  }).then(function(){
    res.redirect('/');
  });
});

});
module.exports = router;
