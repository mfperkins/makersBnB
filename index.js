var express = require('express');
var config = require('./_config');
var app = express();

// mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
//   if(err) {
//     console.log('Error connecting to the database. ' + err);
//   } else {
//     console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
//   }
// });

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {title: 'Hey', message: 'Hello there!'});

});

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;
