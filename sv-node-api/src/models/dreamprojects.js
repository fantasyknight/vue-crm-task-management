/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DreamProjects extends Model {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DreamProjects.belongsTo(models.Dream, {
        foreignKey: "dreamId",
        as: "dream",
      });

      DreamProjects.belongsTo(models.Project, {
        foreignKey: "projectId",
        as: "project",
      });
    }
  }
  DreamProjects.init(
    {
      dreamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
    },
    {
      scopes: {},
      sequelize,
      modelName: "DreamProjects",
    }
  );
  return DreamProjects;
};
