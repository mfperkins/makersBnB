process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var expect = chai.expect;

chai.use(chaiHttp);


describe('/', function() {

  it('should load a GET request', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      expect(res).to.have.status(200);
      done();
    });
  });
});
