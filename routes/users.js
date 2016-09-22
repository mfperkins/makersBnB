var express = require('express');
var router = express.Router();
var models  = require('../models');
var session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/sign-up', function(req, res) {
  res.render('signUp');
});

router.post('/', function(req, res) {
req.session.email = req.body.email;
req.session.save();
  models.user.create({
      email: req.body.email,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation
    }).then(function() {
  res.redirect('/users/welcome');
  });
});

router.get('/welcome', function(req, res) {
  console.log(req.session.email);
  res.render('welcome', {email: req.session.email });
});

router.get('/sign-in', function(req, res) {
  res.render('sign-in');
});

router.post('/sign-in-submit', function(req, res) {
  models.user.findAll({where: {email: req.body.email}}).then(function(user) {
    req.session.email = user[0].email;
    req.session.save();
    res.redirect('/users/welcome');
      });
});




module.exports = router;
