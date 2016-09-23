'use-strict';

var db = require("sequelize-tools").db;
var expect    = require("chai").expect;
var converter = require("../models/user");
var models = require('../models');


xdescribe("spaces", function() {

  beforeEach(function(done){
    models.space.drop();
    models.space.sync();
    models.space.create({
      title: 'Arctic Tree House',
      description: 'Elsa meets the Jungle Book',
      price: 10,
      availability: 'never'
    });
    done();
  });


  it("count increases by one when a space is added", function(){
    expect();
  });


});
