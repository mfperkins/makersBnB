// process.env.NODE_ENV = 'test';
//
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// var expect = chai.expect;
// var app = require('../app.js');
// var http = require('http');
// var Browser = require('zombie');
// var models = require('../models');
//
// describe ('User creates a new space', function() {
//
//   before(function(done){
//     models.space.drop();
//     models.space.sync();
//     this.server = http.createServer(app).listen(3002);
//     this.browser = new Browser({site: 'http://localhost:3002' });
//     this.browser.visit('/spaces/new', done);
//   });
//
//   describe ('fill in and submit form', function(){
//     before(function(done){
//       this.browser
//         .fill('title', 'Arctic Tree House')
//         .fill('description', 'Elsa meets the Jungle Book')
//         .fill('price', 10)
//         .fill('availability', 'never')
//         .pressButton('List your space!', done);
//     });
//
//
//     });
// });
