'use-strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
 var User = sequelize.define("user", {
    email: {
       type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUnique: function (value, next) {
                    var self = this;
                    User.find({where: {email: value}})
                        .then(function (user) {
                            // reject if a different user wants to use the same email
                            if (user && self.id !== user.id) {
                                return next('Email already in use!');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                }
            }
        },
        password:       {
        type: DataTypes.STRING,
        set:  function(v) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(v, salt);

            this.setDataValue('password', hash);
        }
      },
    password_confirmation: DataTypes.STRING
 });


 return User;
};
