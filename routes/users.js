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
  res.render('sign-up', { success: req.session.success, errors: req.session.errors });
  req.session.errors = null;
});

router.post('/new', function(req, res) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.password_confirmation);
  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
    res.render('sign-up', { fail: errors[0].msg });
  } else {
    req.session.success = true;
    req.session.email = req.body.email;
    req.session.save();
    models.user.create({
        email: req.body.email,
        password: req.body.password
      }).then(function() {
    res.redirect('/spaces');
    });
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
      res.redirect('/spaces');
    }
    else {
     res.redirect('/sign-in-submit');
    }
  });
});

router.post('/sign-out-submit', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/spaces');
  });
 });

module.exports = router;
