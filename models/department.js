"use strict";
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var Department = sequelize.define("Department", {
        name: {
            type: DataTypes.STRING,
            allowedNull: false
        }
    }, {});
    // Define Relationships
    Department.associate = function(models){
        // Parent of Admins Table
        Department.hasMany(models.Admin, {
            targetKey: "departmentId",
            onDelete: "CASCADE"
        });
        // Parent of Requests Table
        Department.hasMany(models.Request, {
            targetKey: "departmentId",
            onDelete: "CASCADE"
        });
    };
    return Department;
};