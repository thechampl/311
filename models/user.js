"use strict";
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userType: {
            type: DataTypes.STRING,
            defaultValue: "User"
        },
        homePhone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        firebaseId: DataTypes.UUID
    }, {});
    // Define Relationships
    User.associate = function(models) {
        User.hasMany(models.Admin, {
            targetKey: "userId",
            onDelete: "CASCADE"
        });
        User.hasMany(models.Ticket, {
            targetKey: "userId"          
        });
    };
    return User;
};