/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectFavorite extends Model {}
  ProjectFavorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      defaultScope: {},
      scopes: {},
      sequelize,
      modelName: "ProjectFavorite",
    }
  );
  return ProjectFavorite;
};
