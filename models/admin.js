module.exports = function(sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {});

    Admin.associate = function(models) {
        Admin.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
        Admin.belongsTo(models.Department, {
            foreignKey: {
              allowNull: false
            }
        });
    };

    return Admin;
};
