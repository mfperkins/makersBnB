"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', '_config.js'))[env];
var sequelize = new Sequelize(config.database, config);
// var sequelize = new Sequelize('bnb_dev', 'mfperkins', 'password', {
//   dialect: 'postgres',
// });
var db        = {};

fs
 .readdirSync(__dirname)
 .filter(function(file) {
   return (file.indexOf(".") !== 0) && (file !== "index.js");
 })
 .forEach(function(file) {
   var model = sequelize.import(path.join(__dirname, file));
   db[model.name] = model;
 });

Object.keys(db).forEach(function(modelName) {
 if ("associate" in db[modelName]) {
   db[modelName].associate(db);
 }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
