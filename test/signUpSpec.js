process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');
var models = require("../models/user");

describe ('User sign up flow', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3002);
    models.user.drop();
    models.user.sync(done);
  });

  before(function(done){

    browser = new Browser({site: 'http://localhost:3002' });
    browser.visit('/users/sign-up', done);
  });

  describe ("Create an account", function() {

    before(function(done) {
      browser.fill('email', 'homersimpson@springfield.com');
      browser.fill('password', 'DOH!');
      browser.fill('password_confirmation', 'DOH!');
      browser.pressButton("Sign up", done);
    });

    it('should be successful', function() {
     browser.assert.success();
   });

    it('I can create an account', function() {
      console.log(browser.text('h1'));
      browser.assert.text('h1', 'Welcome to ByteZero Spaces');
      browser.assert.text('p', 'homersimpson@springfield.com');
    });

  });

});
