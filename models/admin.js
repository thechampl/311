"use strict";
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var Admin = sequelize.define("Admin", {}, {});
    // Define Relationships
    Admin.associate = function(models){
        // Child of Users Table
        Admin.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                foreignKey: "userId"
            }
        });
        // Child of Departments Table
        Admin.belongsTo(models.Department, {
            foreignKey: {
                allowNull: false,
                foreignKey: "departmentId"
            }
        });
    };
    return Admin;
};