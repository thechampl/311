module.exports = function(sequelize, DataTypes) {
    var Request = sequelize.define("Request", {
        name: {
            type: DataTypes.STRING
        }
    });

    Request.associate = function(models) {
        Request.hasMany(models.Ticket, {
            onDelete: "cascade"
        });
        Request.hasMany(models.Question, {
            onDelete: "cascade"
        });
        Request.belongsTo(models.Department, {
            foreignKey: {
              allowNull: false
            }
        });
    };

    return Request;
};
