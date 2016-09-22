process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');

describe ('User visits sign in', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3008);
    browser = new Browser({site: 'http://localhost:3008' });
    browser.visit('/users/sign-up');
    browser.fill('email', 'homersimpson@springfield.com');
    browser.fill('password', 'DOH!');
    browser.fill('password_confirmation', 'DOH!');
    browser.pressButton("Sign Up", done);
  });

  describe ('User visits sign in', function(done) {
    before(function(done){
      browser.visit('/users/sign-in');
      browser.fill('email', 'homersimpson@springfield.com');
      browser.fill('password', 'DOH!');
      browser.pressButton("Sign in", done);
    });

        it('I can log in as user', function() {
        browser.assert.text('h1', 'homersimpson@springfield.com');
        });
      });
  });
