process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');

describe ('User visits index', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3456);
    this.browser = new Browser({site: 'http://localhost:3456' });
    this.browser.visit('/', done);
  });

  it('should load a welcome page', function(done) {
    expect(this.browser.text('h1')).to.equal("Hello there!");
    done();
  });

});
