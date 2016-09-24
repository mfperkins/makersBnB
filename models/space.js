'use-strict';

module.exports = function(sequelize, DataTypes) {
 var Space = sequelize.define("space", {
   title: DataTypes.STRING,
   description: DataTypes.TEXT,
   price: DataTypes.INTEGER,
   availability: DataTypes.STRING
 },{
   classMethods: {
      associate: function(models) {
        Space.belongsTo(models.user, { foreignKey: 'user_id'});
      }
    }
 });


 return Space;
};
