var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');
var expect = chai.expect;

chai.use(chaiHttp);


describe('/', function() {
  it('should list load a GET request', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      console.log(res);
      expect(res).to.have.status(200);
      done();
    });
  });
});
