var express = require('express');
var router = express.Router();
var models  = require('../models');
var session = require('express-session');
var bcrypt = require('bcrypt');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sign-up', function(req, res) {
  res.render('signUp', { success: req.session.success, errors: req.session.errors });
  req.session.errors = null;
  // res.render('sign-up');
});

router.post('/new', function(req, res) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.password_confirmation);
  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    console.log(req.session.errors);
    req.session.success = false;
    res.render('signUp', { fail: errors[0].msg });
    // res.redirect('/users/sign-up');
  } else {
    req.session.success = true;
    req.session.email = req.body.email;
    req.session.save();
    models.user.create({
        email: req.body.email,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
      }).then(function() {
    res.redirect('/users/welcome');
    });
  }
});

router.get('/welcome', function(req, res) {
  if (req.session !== null) {
    res.render('welcome', {email: req.session.email, unidentified:'No user signed in'});
  }
});

router.get('/sign-in', function(req, res) {
  res.render('sign-in');
});

router.post('/sign-in-submit', function(req, res, next) {
  models.user.findAll({where: {email: req.body.email}}).then(function(user) {
    if (bcrypt.compareSync(req.body.password,user[0].password )) {
      req.session.email = user[0].email;
      req.session.save();
      res.redirect('/users/welcome');
    }
    else {
     res.redirect('/users/welcome');
    }
  });
});

router.post('/sign-out-submit', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/users/welcome');
  });
 });

module.exports = router;
