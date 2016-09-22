process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');


describe ('User signs out', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3009);
    this.browser = new Browser({site: 'http://localhost:3009' });
    this.browser.visit('/users/sign-in', done);

  });

  before(function(done){
    this.browser.fill('email', 'homersimpson@springfield.com');
    this.browser.fill('password', 'DOH!');
    this.browser.pressButton("Sign In");
    this.browser.visit('/users/welcome', done);
  });

  it('user can sign out', function() {
    this.browser.pressButton("Sign Out");
    this.browser.assert.text('unidentified', 'No user signed in');
    this.browser.assert.text('body', null);
  });

});
