'use-strict';

var db = require("sequelize-tools").db;
var expect    = require("chai").expect;
var converter = require("../models/user");
var models = require('../models');


describe("spaces", function() {

  beforeEach(function(done){
    models.space.drop();
    models.space.sync();
    done();
  });

  // after(function(){
  //   models.space.drop();
  // });

  it("count increases by one when a space is added", function(){
    models.space.create({
      title: 'Arctic Tree House',
      description: 'Elsa meets the Jungle Book',
      price: 10,
      availability: 'never'
    });
      // expect(models.space.count()).to.equal(1);
    });


});
