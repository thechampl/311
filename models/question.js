module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        label: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING
        },
        choices: {
            type: DataTypes.STRING
        }
        
    });

    Question.associate = function(models) {
        Question.belongsTo(models.Request, {
            foreignKey: {
              allowNull: false
            }
        });
    };

    return Question;
};
