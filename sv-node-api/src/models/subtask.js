/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      SubTask.belongsTo(models.Status, {
        foreignKey: "statusId",
        as: "status",
      });

      SubTask.belongsTo(models.Task, {
        foreignKey: "taskId",
        as: "task",
      });

      SubTask.hasMany(models.SubTaskMember, {
        foreignKey: "subtaskId",
        as: "members",
      });
    }
  }
  SubTask.init(
    {
      taskId: {
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
        withSubTaskMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("SubTaskMember").scope("withUser"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "SubTask",
    }
  );
  return SubTask;
};
