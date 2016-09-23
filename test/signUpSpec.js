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
    models.user.drop();
    models.user.sync();
    done();
  });

  describe ('User sign up flow', function() {

    before(function(done){
      models.user.drop();
      models.user.sync();
      this.server = http.createServer(app).listen(3002);
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

      it('should create a user', function() {
        browser.assert.success();
      });

      it('should welcome a user', function() {
        browser.assert.text('h1', 'Welcome to ByteZero Spaces');
        browser.assert.text('p#welcomeEmail', 'homersimpson@springfield.com');
      });

      describe ('User signs out', function() {

        before(function(done){
          browser.pressButton("Sign Out", done);
        });

        it('should sign out', function() {
          browser.assert.success();
        });

        it('user can sign out', function() {
          browser.assert.text('p#noUser', 'No user signed in');
        });

        describe ('User visits sign in', function() {

          before(function(done){
            browser.visit('/users/sign-in', done);
            console.log(browser.text());
            console.log("8");
          });

          describe ('User signs in', function () {

            before(function(done) {
              browser.fill('email', 'homersimpson@springfield.com');
              browser.fill('password', 'DOH!');
              browser.pressButton("Sign In", done);
              console.log("9");
            });

            it('I can sign in as user', function() {
              console.log(browser.text());
              browser.assert.text('h1', 'Welcome to ByteZero Spaces');
              browser.assert.text('p#welcomeEmail', 'homersimpson@springfield.com');
              console.log("10");
            });

          });
        });
      });
    });
  });
});
