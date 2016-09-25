
var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res) {
  models.space.findAll().then(function(spaces) {
    res.render('spaces', {
      h1: "Available spaces:",
      spaces: spaces,
      email: req.session.email,
      unidentified:'No user signed in',
    });
  });
});

router.get('/new', function(req, res) {
  res.render('create_space', {
    h1: 'List a space'
  });
});


router.get('/:id', function(req, res){
  models.space.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(spaces){
  res.render('theSpace', {
    spaces: spaces
  });
});
});


router.get('/:id/edit', function(req, res){
  models.space.findAll({where: {id: req.params.id}}).then(function(spaces){
  res.render('theSpaceEdit', {
    spaces: spaces
  });
  });
});

router.post('/:id/edit', function(req, res){
  models.space.update({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    availability: req.body.availability
  }, {where: {id: req.params.id}}).then(function(){
      res.redirect('/spaces/'+req.params.id);
    });
});


router.post('/', function(req, res) {
  models.space.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      availability: req.body.availability
    }).then(function() {
      res.redirect('/spaces');
    });
});

module.exports = router;
