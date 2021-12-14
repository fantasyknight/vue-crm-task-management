/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Goal.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });

      Goal.belongsTo(models.Status, {
        foreignKey: "statusId",
        as: "status",
      });

      Goal.hasMany(models.GoalMember, {
        foreignKey: "goalId",
        as: "members",
      });

      Goal.hasMany(models.GoalTasks, {
        foreignKey: "goalId",
        as: "tasks",
      });

      Goal.hasMany(models.GoalProjects, {
        foreignKey: "goalId",
        as: "projects",
      });
    }
  }
  Goal.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statusId: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      priority: {
        type: DataTypes.ENUM("top", "medium", "low"),
        allowNull: true,
      },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      defaultScope: {
        where: {
          isDeleted: false,
        },
      },
      scopes: {
        withTasks: () => ({
          include: [
            {
              as: "tasks",
              model: sequelize.model("GoalTasks"),
            },
          ],
        }),

        withProjects: () => ({
          include: [
            {
              as: "projects",
              model: sequelize.model("GoalProjects"),
            },
          ],
        }),

        withCompany: () => ({
          include: [
            {
              as: "company",
              model: sequelize.model("Company"),
            },
          ],
        }),

        withStatus: () => ({
          include: [
            {
              as: "status",
              model: sequelize.model("Status"),
            },
          ],
        }),

        withGoalMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("GoalMember").scope("withUser"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Goal",
    }
  );
  return Goal;
};
