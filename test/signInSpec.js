process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');

xdescribe ('User visits sign in', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3008);
    this.browser = new Browser({site: 'http://localhost:3008' });
    this.browser.visit('/users/sign-in', done);

  });

  before(function(done){
    this.browser.fill('email', 'homersimpson@springfield.com');
    this.browser.fill('password', 'DOH!');
    this.browser.pressButton("Sign In", done);
  });


    it('I can sign in as user', function() {
      this.browser.assert.text('h1', 'homersimpson@springfield.com');
    });

  });
