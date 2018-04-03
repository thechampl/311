module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
        value: {
            type: DataTypes.STRING,
        }        
    });

    Answer.associate = function(models) {
        Answer.belongsTo(models.Ticket, {
            foreignKey: {
              allowNull: false
            }
        });
        Answer.belongsTo(models.Question, {
            foreignKey: {
              allowNull: false
            }
        });
    };

    return Answer;
};
