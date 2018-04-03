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