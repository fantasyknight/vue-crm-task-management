/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectTasks extends Model {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProjectTasks.belongsTo(models.Project, {
        foreignKey: "projectId",
        as: "project",
      });

      ProjectTasks.belongsTo(models.Task, {
        foreignKey: "taskId",
        as: "task",
      });
    }
  }
  ProjectTasks.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      taskId: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
    },
    {
      scopes: {},
      sequelize,
      modelName: "ProjectTasks",
    }
  );
  return ProjectTasks;
};
