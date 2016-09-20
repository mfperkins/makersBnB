var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Homepage Tests', function() {

  var client = {};

  before(function(done) {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}   });
    client.init(done);
  });

  after(function(done) {
    client.end(done);
  });

  it('Homepage Title Displays',function(done) {
    client
      .url('http://localhost:3000')
      .getTitle(function(err, title) {
        expect(err).to.not.be.true;
        expect(title).to.eql('Hey');
      })
      .call(done);
  });

});
