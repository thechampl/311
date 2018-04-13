'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Departments", [
      { createdAt: new Date(), updatedAt: new Date(), name: "Animals" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Drainage" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Landscape" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Neighborhoods" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Sidewalks" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Streets" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Trash" },
      { createdAt: new Date(), updatedAt: new Date(), name: "Zoning" }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  }
};