'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        allowNull: false
      },
      requestId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Requests",
          key: "id"
        },
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ["new", "in progress", "closed"],
        default: "new"
      },
      votes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      comments: {
        type: Sequelize.TEXT
      },
      street: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
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
    return queryInterface.dropTable("Tickets");
  }
};