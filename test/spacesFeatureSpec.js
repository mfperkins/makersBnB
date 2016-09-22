process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');

describe ('User visits spaces page', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3457);
    browser = new Browser({site: 'http://localhost:3457' });
    browser.visit('/spaces', done);
  });

  it("should display a page with spaces", function() {
    browser.assert.text("h1", "Available spaces:");
  });

});
