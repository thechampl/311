'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Departments", [
            { createdAt: new Date(), updatedAt: 0, name: "Animals" }, 
            { createdAt: new Date(), updatedAt: 0, name: "Drainage" }, 
            { createdAt: new Date(), updatedAt: 0, name: "Landscape" },
            { createdAt: new Date(), updatedAt: 0, name: "Neighborhoods" },
            { createdAt: new Date(), updatedAt: 0, name: "Sidewalks" },
            { createdAt: new Date(), updatedAt: 0, name: "Streets" },
            { createdAt: new Date(), updatedAt: 0, name: "Trash" },
            { createdAt: new Date(), updatedAt: 0, name: "Zoning" }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Departments", null, {});
    }
};