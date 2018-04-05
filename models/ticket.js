'use strict';
module.exports = (sequelize, DataTypes) => {
    // Table Definition
    var Ticket = sequelize.define('Ticket', {
        status: {
            type: DataTypes.ENUM,
            values: ['new', 'in progress', 'closed'],
            default: 'new'
        },
        votes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        comments: DataTypes.TEXT,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING
    }, {});
    // Define Relationships
    Ticket.associate = function(models){
        // Child of Users Table
        Ticket.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                foreignKey: "userId",
                onDelete: "CASCADE"
            }
        });
        // Child of Requests Table
        Ticket.belongsTo(models.Request, {
            foreignKey: {
                allowNull: false,
                foreignKey: "requestId",
                onDelete: "CASCADE"
            }
        });
        // Parent of Answers Table
        Ticket.hasMany(models.Answer, {
            foreignKey: "ticketId",
            onDelete: "CASCADE"
        });
    };
    return Ticket;
};