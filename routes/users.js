var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/sign-up', function(req, res) {
  res.render('signUp');
});

router.post('/sign-up', function(req, res) {
  res.redirect('/users/welcome');
});

router.get('/welcome', function(req, res) {
  res.render('welcome');
});

module.exports = router;
