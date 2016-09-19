var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.get('/', function(req, res) {
  res.render('index', {title: 'Hey', message: 'Hello there!'});

});

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;
