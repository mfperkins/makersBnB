var express = require('express');
var config = require('./_config');
var models = require("./models");
var app = express();

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function() {
  app.listen(app.get('port'), function() {
    console.log('Listening on:', app.get('port'));
  });
});

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {title: 'Hey', message: 'Hello there!'});

});

app.get('/spaces', function(req, res) {
  res.render('spaces', {h1: 'Spaces'});

});

module.exports = app;
