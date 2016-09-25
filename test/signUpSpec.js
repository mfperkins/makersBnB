process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');
var models = require("../models");

describe ("Clean DB", function () {

  before(function(done){
    models.user.drop({force: true});
    models.user.sync({force: true});
    done();
  });

  describe ('User sign up flow', function() {

    before(function(done){
      this.server = http.createServer(app).listen(3001);
      browser = new Browser({site: 'http://localhost:3001' });
      browser.visit('/users/sign-up', done);
    });

    describe ("Create an account", function() {

      before(function(done) {
        browser.fill('email', 'homersimpson@springfield.com');
        browser.fill('password', 'DOH!');
        browser.fill('password_confirmation', 'DOH!');
        browser.pressButton('button#signUpBtn', done);
      });

      it('should create a user', function() {
        browser.assert.success();
      });

      it('should welcome a user', function() {
        browser.assert.text('h2', 'Welcome homersimpson@springfield.com to Byte0 BnB');
      });

      describe ('User signs out', function() {

        before(function(done){
          browser.pressButton("Log out", done);
        });

        it('should sign out', function() {
          browser.assert.success();
        });

        describe ('User visits sign in', function() {

          before(function(done){
            browser.visit('/users/sign-in', done);
          });

          describe ('User signs in', function () {

            before(function(done) {
              browser.fill('email', 'homersimpson@springfield.com');
              browser.fill('password', 'DOH!');
              browser.pressButton("button#signInBtn", done);
            });

            it('I can sign in as user', function() {
              console.log(browser.text());
              browser.assert.text('h2', 'Welcome homersimpson@springfield.com to Byte0 BnB');
            });

          });
        });
      });
    });
  });
});
