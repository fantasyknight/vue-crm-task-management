/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GoalTasks extends Model {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoalTasks.belongsTo(models.Goal, {
        foreignKey: "goalId",
        as: "task",
      });

      GoalTasks.belongsTo(models.Task, {
        foreignKey: "taskId",
        as: "goal",
      });
    }
  }
  GoalTasks.init(
    {
      goalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      scopes: {},
      sequelize,
      modelName: "GoalTasks",
    }
  );
  return GoalTasks;
};
