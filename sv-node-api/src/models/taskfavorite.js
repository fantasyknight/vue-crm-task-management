/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TaskFavorite extends Model {}
  TaskFavorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      defaultScope: {},
      scopes: {},
      sequelize,
      modelName: "TaskFavorite",
    }
  );
  return TaskFavorite;
};
