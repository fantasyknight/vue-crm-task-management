"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Section.hasMany(models.Task, {
        foreignKey: "sectionId",
        as: "tasks",
      });
    }
  }
  Section.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      scopes: {
        withTasks: () => ({
          include: [
            {
              as: "tasks",
              model: sequelize.model("Task"),
              required: false,
              include: [
                {
                  as: "status",
                  model: sequelize.model("Status"),
                  attributes: ['text']
                }
              ]
            },
          ],
        }),
      },
      sequelize,
      modelName: "Section",
    }
  );
  return Section;
};
