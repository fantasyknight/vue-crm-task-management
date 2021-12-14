/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GoalProjects extends Model {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoalProjects.belongsTo(models.Goal, {
        foreignKey: "goalId",
        as: "goal",
      });

      GoalProjects.belongsTo(models.Project, {
        foreignKey: "projectId",
        as: "project",
      });
    }
  }
  GoalProjects.init(
    {
      goalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      scopes: {},
      sequelize,
      modelName: "GoalProjects",
    }
  );
  return GoalProjects;
};
