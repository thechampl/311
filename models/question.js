"use strict";
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var Question = sequelize.define("Question", {
        label: DataTypes.STRING,
        type: DataTypes.STRING,
        choices: DataTypes.STRING,
        required: DataTypes.BOOLEAN
    }, {});
    // Define Relationships
    Question.associate = function(models){
        // Child of Requests Table
        Question.belongsTo(models.Request, {
            foreignKey: {
                allowNull: false,
                foreignKey: "departmentId"
            }
        });
    };
    return Question;
};