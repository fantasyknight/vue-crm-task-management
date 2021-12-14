/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubTaskFavorite extends Model {}
  SubTaskFavorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subtaskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      defaultScope: {},
      scopes: {},
      sequelize,
      modelName: "SubTaskFavorite",
    }
  );
  return SubTaskFavorite;
};
