'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Requests", [
            { departmentId: 1, createdAt: new Date(), updatedAt: 0, name: "Dead Animal Collection" }, 
            { departmentId: 2, createdAt: new Date(), updatedAt: 0, name: "Blockage in a city drainage system" }, 
            { departmentId: 2, createdAt: new Date(), updatedAt: 0, name: "Erosion along a creek or storm drain" },
            { departmentId: 2, createdAt: new Date(), updatedAt: 0, name: "Flooding from a drainage structure" },
            { departmentId: 2, createdAt: new Date(), updatedAt: 0, name: "Pollution in a creek, stream or lake" },
            { departmentId: 3, createdAt: new Date(), updatedAt: 0, name: "Trees" },
            { departmentId: 4, createdAt: new Date(), updatedAt: 0, name: "Boarded Up Residential Structure" },
            { departmentId: 4, createdAt: new Date(), updatedAt: 0, name: "Graffiti" },
            { departmentId: 4, createdAt: new Date(), updatedAt: 0, name: "High weeds & grass,junk in yard,etc." },
            { departmentId: 4, createdAt: new Date(), updatedAt: 0, name: "Parking on Lawn 8 am - 5 pm M-F" },
            { departmentId: 4, createdAt: new Date(), updatedAt: 0, name: "Parking on Lawn After Hours/Weekends" },
            { departmentId: 4, createdAt: new Date(), updatedAt: 0, name: "Signs in Public Rights of Way" },
            { departmentId: 5, createdAt: new Date(), updatedAt: 0, name: "Container Obstruction" },
            { departmentId: 5, createdAt: new Date(), updatedAt: 0, name: "Obstruction" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Basketball Goal in Street" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "New Sidewalk" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "New Traffic Signal Request" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Pothole Repair" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Residential Traffic Calming Devices" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Right of Way Sight Obstructions" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Sidewalk Repair" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Street Sign Repair" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Streetlight Repair" },
            { departmentId: 6, createdAt: new Date(), updatedAt: 0, name: "Traffic Signal Timing" },
            { departmentId: 7, createdAt: new Date(), updatedAt: 0, name: "Schedule a Bulky Item Pickup" },
            { departmentId: 8, createdAt: new Date(), updatedAt: 0, name: "Enforcement" }
        ],{});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Departments", null, {});
    }
};