'use-strict';

module.exports = function(sequelize, DataTypes) {
 var User = sequelize.define("user", {
    email: {
        type: DataTypes.STRING,
        validate: {
            isUnique: function(value, next) {

                User.find({
                    where: {email: value},

                })
                    .done(function(error, user) {

                        if (error)
                            // Some unexpected error occured with the find method.
                            return next(error);

                        if (user)
                            // We found a user with this email address.
                            // Pass the error to the next method.
                            return next('Email address already in use!');

                        // If we got this far, the email address hasn't been used yet.
                        // Call next with no arguments when validation is successful.
                        next();

                    });

            }
        }
    },
    password: DataTypes.STRING,
    password_confirmation: DataTypes.STRING
 });

 return User;
};
