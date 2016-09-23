process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');
var models = require('../models');


describe ('User visits spaces page', function() {

  before(function(done){
    models.space.drop();
    models.space.sync();
    this.server = http.createServer(app).listen(3005);
    this.browser = new Browser({site: 'http://localhost:3005' });
    this.browser.visit('/spaces', done);
  });

  it("should display a page with spaces", function() {
    this.browser.assert.text("h1", "Available spaces:");
  });

});
