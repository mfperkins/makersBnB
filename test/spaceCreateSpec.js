process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');
var models = require('../models');

describe ("Clean DB", function () {

  before(function(done){
    models.space.drop();
    models.space.sync();
    done();
  });

  describe ('User creates a new space', function() {

    before(function(done) {
      this.server = http.createServer(app).listen(3000);
      browser = new Browser({site: 'http://localhost:3000' });
      browser.visit('/spaces/new', done);
    });

    describe ('fill in and submit form', function(){

      before(function(done){
        browser.fill('title', 'Arctic Tree House')
        browser.fill('description', 'Elsa meets the Jungle Book')
        browser.fill('price', 10)
        browser.fill('availability', 'never')
        browser.pressButton('List your space!', done);
      });

      it('should be able to create a new space', function(){
        browser.assert.success();
      });

      describe ('viewing specific space', function(){

        before(function(done){
          browser.clickLink('Arctic Tree House', done);
        });

        it('should take you to the page of the property', function(){
          browser.assert.success();
          browser.assert.text('li#title', 'Arctic Tree House');
        });

        describe('editing a space', function(){

          beforeEach(function(done){
            browser.visit('/spaces/1/edit', done);
          });

          describe('another stupid block', function(){
            beforeEach(function(done){
              browser
                .fill('title', 'Desert Tree House')
                .fill('description', 'Lion King meets the mighty jungle')
                .fill('price', 20)
                .fill('availability', 'sometimes')
                .pressButton('Edit this space!', done);
            });

          it('should be able edit a page', function(){
            browser.assert.success();
          browser.assert.text('li#title', 'Desert Tree House');
          });

          });
        });
      });
    });
  });
});
