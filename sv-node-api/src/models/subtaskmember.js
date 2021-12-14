/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubTaskMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubTaskMember.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      SubTaskMember.belongsTo(models.SubTask, {
        foreignKey: "subtaskId",
        as: "subtask",
      });
    }
  }
  SubTaskMember.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subtaskId: {
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
        withSubTask: () => ({
          include: [
            {
              as: "subtask",
              model: sequelize.model("SubTask"),
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
      modelName: "SubTaskMember",
    }
  );
  return SubTaskMember;
};
