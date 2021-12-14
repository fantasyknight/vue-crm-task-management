/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DreamFavorite extends Model {}
  DreamFavorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dreamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      defaultScope: {},
      scopes: {},
      sequelize,
      modelName: "DreamFavorite",
    }
  );
  return DreamFavorite;
};
