'use strict';
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var Answer = sequelize.define('Answer', {
        value: DataTypes.STRING
    }, {});
    // Define Relationships
    Answer.associate = function(models){
        // Child of Tickets Table
        Answer.belongsTo(models.Ticket, {
            foreignKey: {
                allowNull: false,
                foreignKey: "ticketId"
            }
        });
        // Child of Questions Table
        Answer.belongsTo(models.Question, {
            foreignKey: {
                allowNull: false,
                foreignKey: "questionId"
            }
        });
    };
    return Answer;
};