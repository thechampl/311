module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowedNull: false,
            validate: {
                len: [1, 255]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowedNull: false,
            validate: {
                len: [1, 255]
            }
        },
        userType: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        homePhone: {
            type: DataTypes.INTEGER,
            allowedNull: false,
            validate: {
                len: [10]
            }
        },
        workPhone: {
            type: DataTypes.INTEGER,
            allowedNull: true,
            validate: {
                len: [10]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowedNull: false,
            validate: {
                isEmail: true
            }
        },
        street: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowedNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowedNull: false,
            validate: {
                len: [4,5]
            }     
        }
    });

    User.associate = function(models) {
        User.hasMany(models.Admin, {
          onDelete: "cascade"
        });
        User.hasMany(models.Ticket, {});
    };

    return User;
};
