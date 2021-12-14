/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TaskMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TaskMember.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      TaskMember.belongsTo(models.Task, {
        foreignKey: "taskId",
        as: "task",
      });
    }
  }
  TaskMember.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      scopes: {
        withTask: () => ({
          include: [
            {
              as: "task",
              model: sequelize.model("Task"),
            },
          ],
        }),

        withUser: () => ({
          include: [
            {
              as: "user",
              model: sequelize
                .model("User")
                .scope(["withoutPassword", "withoutToken", "withProfile"]),
            },
          ],
        }),
      },
      sequelize,
      modelName: "TaskMember",
    }
  );
  return TaskMember;
};
