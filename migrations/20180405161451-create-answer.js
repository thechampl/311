"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Answers", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        ticketId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Tickets",
                key: "id"
            },
            allowNull: false
        },
        questionId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Questions",
                key: "id"
            },
            allowNull: false
        },
        value: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Answers");
    }
};