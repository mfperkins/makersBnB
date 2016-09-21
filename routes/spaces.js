var express = require('express');
var router = express.Router();
var models  = require('../models');/* GET users listing. */
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

});
module.exports = router;
