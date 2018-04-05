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
        },
        required: {
            type: DataTypes.BOOLEAN
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
