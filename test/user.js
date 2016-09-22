'use-strict';

var db = require("sequelize-tools").db;
var expect    = require("chai").expect;
var converter = require("../models/user");
var models = require('../models');

// describe ("users", function() {
//
//   // beforeEach(function(done) {
//   //   db.init(done);
//   // });
//
//   describe ("at start", function() {
//     it('should have a first name', function() {
//       models.user.create({
//         username: null
//       }).then(function() {
//       expect(models.user()).toEqual(null);
//       });
//     });
//   });
// });
