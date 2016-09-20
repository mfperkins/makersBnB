'use-strict';

const Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe ('User visits index', function() {
  const browser = new Browser();

  before(function(done){
    browser.visit('/', done);
  });

  it('should load a welcome page', function() {
    browser.assert.text('title', 'Hey');
  });

});
