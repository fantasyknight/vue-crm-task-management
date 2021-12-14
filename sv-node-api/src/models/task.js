/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });

      Task.belongsTo(models.Section, {
        foreignKey: "sectionId",
        as: "section"
      });

      Task.belongsTo(models.Status, {
        foreignKey: "statusId",
        as: "status",
      });

      Task.hasMany(models.TaskMember, {
        foreignKey: "taskId",
        as: "members",
      });

      Task.hasMany(models.ProjectTasks, {
        foreignKey: "taskId",
        as: "projects",
      });

      Task.hasMany(models.GoalTasks, {
        foreignKey: "taskId",
        as: "goals",
      });

      Task.hasMany(models.DreamTasks, {
        foreignKey: "taskId",
        as: "dreams",
      });

      Task.hasMany(models.SubTask, {
        foreignKey: "taskId",
        as: "subtasks",
      });
    }
  }
  Task.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: true
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
        withSubTask: () => ({
          include: [
            {
              as: "subtasks",
              model: sequelize.model("SubTask"),
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

        withTaskMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("TaskMember").scope("withUser"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
