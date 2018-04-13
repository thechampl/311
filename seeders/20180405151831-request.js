'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Requests", [
      { departmentId: 1, createdAt: new Date(), updatedAt: new Date(), name: "Dead Animal Collection" },
      { departmentId: 2, createdAt: new Date(), updatedAt: new Date(), name: "Blockage in a city drainage system" },
      { departmentId: 2, createdAt: new Date(), updatedAt: new Date(), name: "Erosion along a creek or storm drain" },
      { departmentId: 2, createdAt: new Date(), updatedAt: new Date(), name: "Flooding from a drainage structure" },
      { departmentId: 2, createdAt: new Date(), updatedAt: new Date(), name: "Pollution in a creek, stream or lake" },
      { departmentId: 3, createdAt: new Date(), updatedAt: new Date(), name: "Trees" },
      { departmentId: 4, createdAt: new Date(), updatedAt: new Date(), name: "Boarded Up Residential Structure" },
      { departmentId: 4, createdAt: new Date(), updatedAt: new Date(), name: "Graffiti" },
      { departmentId: 4, createdAt: new Date(), updatedAt: new Date(), name: "High weeds & grass,junk in yard,etc." },
      { departmentId: 4, createdAt: new Date(), updatedAt: new Date(), name: "Parking on Lawn 8 am - 5 pm M-F" },
      { departmentId: 4, createdAt: new Date(), updatedAt: new Date(), name: "Parking on Lawn After Hours/Weekends" },
      { departmentId: 4, createdAt: new Date(), updatedAt: new Date(), name: "Signs in Public Rights of Way" },
      { departmentId: 5, createdAt: new Date(), updatedAt: new Date(), name: "Container Obstruction" },
      { departmentId: 5, createdAt: new Date(), updatedAt: new Date(), name: "Obstruction" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Basketball Goal in Street" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "New Sidewalk" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "New Traffic Signal Request" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Pothole Repair" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Residential Traffic Calming Devices" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Right of Way Sight Obstructions" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Sidewalk Repair" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Street Sign Repair" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Streetlight Repair" },
      { departmentId: 6, createdAt: new Date(), updatedAt: new Date(), name: "Traffic Signal Timing" },
      { departmentId: 7, createdAt: new Date(), updatedAt: new Date(), name: "Schedule a Bulky Item Pickup" },
      { departmentId: 8, createdAt: new Date(), updatedAt: new Date(), name: "Enforcement" }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  }
};