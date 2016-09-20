process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');

describe ('User visits index', function() {

  before(function(){
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({site: 'http://localhost:3000' });
    console.log(this.browser);
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should load a welcome page', function(done) {
    expet(this.browser.text('h1')).to.equal("Hello there!");
    done();
  });

});
