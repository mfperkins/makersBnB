'use-strict';

module.exports = function(sequelize, DataTypes) {
 var User = sequelize.define("user", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password_confirmation: DataTypes.STRING
 });

console.log(User);

 return User;
};
