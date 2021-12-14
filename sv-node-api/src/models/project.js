/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });

      Project.belongsTo(models.Status, {
        foreignKey: "statusId",
        as: "status",
      });

      // Project.belongsTo(models.GoalProjects, {
      //   foreignKey: 'projectId',
      //   as: 'project',
      // });

      // Project.belongsTo(models.DreamProjects, {
      //   foreignKey: 'projectId',
      //   as: 'dream',
      // })

      Project.hasMany(models.ProjectMember, {
        foreignKey: "projectId",
        as: "members",
      });

      Project.hasMany(models.ProjectTasks, {
        foreignKey: "projectId",
        as: "tasks",
      });
    }
  }
  Project.init(
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

        withTasks: () => ({
          include: [
            {
              as: "tasks",
              model: sequelize.model("ProjectTasks"),
            },
          ],
        }),

        withProjectMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("ProjectMember").scope("withUser"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
