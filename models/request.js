'use strict';
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var Request = sequelize.define('Request', {
        name: DataTypes.STRING
    }, {});
    // Define Relationships
    Request.associate = function(models){
        // Parent of Tickets Table
        Request.hasMany(models.Ticket, {
            foreignKey: "requestId",
            onDelete: "CASCADE"
        });
        // Parent of Questions Table
        Request.hasMany(models.Question, {
            foreignKey: "requestId",
            onDelete: "CASCADE"
        });
        // Child of Departments Table
        Request.belongsTo(models.Department, {
            foreignKey: {
                allowNull: false,
                foreignKey: "departmentId",
                onDelete: "CASCADE"
            }
        });
    };
    return Request;
};