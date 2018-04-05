module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
        status: {
            type: DataTypes.ENUM,
            values: ['new', 'in progress', 'closed'],
            default: 'new'
        },
        votes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        comments: {
            type: DataTypes.TEXT
        },
        street: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        }
    });

    Ticket.associate = function(models) {
        Ticket.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
        Ticket.belongsTo(models.Request, {
            foreignKey: {
              allowNull: false
            }
        });
        Ticket.hasMany(models.Answer, {
            onDelete: "cascade"
        });
    };

    return Ticket;
};