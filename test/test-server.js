process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var expect = chai.expect;

chai.use(chaiHttp);


describe('/', function() {

  // Blob.collection.drop();
  //
  // beforeEach(function(done){
  //   var newBlob = new Blob({
  //     name: 'Bat',
  //     lastName: 'man'
  //   });
  //   newBlob.save(function(err) {
  //     done();
  //   });
  // });
  // afterEach(function(done){
  //   Blob.collection.drop();
  //   done();
  // });

  it('should list load a GET request', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      expect(res).to.have.status(200);
      console.log(process.env.NODE_ENV);
      done();
    });
  });
});
