module.exports = function(sequelize, DataTypes) {
    var Departnment = sequelize.define("Department", {
        name: {
            type: DataTypes.STRING,
            allowedNull: false,
            validate: {
                len: [1, 255]
            }
        }
        
    });

    Departnment.associate = function(models) {
        Departnment.hasMany(models.Admin, {
          onDelete: "cascade"
        });
        Departnment.hasMany(models.Request, {
            onDelete: "cascade"
        });
    };

    return Departnment;
};

