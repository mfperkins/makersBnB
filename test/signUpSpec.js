process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');


describe ('User visits sign up', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3002);
    browser = new Browser({site: 'http://localhost:3002' });
    browser.visit('/users/sign-up', done);
  });

  it('should load a welcome page', function() {
    browser.assert.text('h1', 'Sign Up');
  });

  describe ('User visits sign up', function() {
    before(function(done){
      browser.fill('email', 'homersimpson@springfield.com');
      browser.fill('password', 'DOH!');
      browser.fill('password_confirmation', 'DOH!');
      browser.pressButton("Sign Up", done);
    });

      it('I can sign up as a new user', function() {
      browser.assert.text('h1', 'homersimpson@springfield.com');

    });
  });
});
