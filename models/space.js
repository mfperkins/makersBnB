'use-strict';

module.exports = function(sequelize, DataTypes) {
 var Space = sequelize.define("Space", {
   title: DataTypes.STRING,
   description: DataTypes.STRING,
   price: DataTypes.INTEGER,
   availability: DataTypes.STRING
 });

 return Space;
};
