/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GoalFavorite extends Model {}
  GoalFavorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      goalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      defaultScope: {},
      scopes: {},
      sequelize,
      modelName: "GoalFavorite",
    }
  );
  return GoalFavorite;
};
