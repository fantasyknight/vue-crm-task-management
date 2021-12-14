/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dream extends Model {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dream.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });

      Dream.belongsTo(models.Status, {
        foreignKey: "statusId",
        as: "status",
      });

      Dream.hasMany(models.DreamMember, {
        foreignKey: "dreamId",
        as: "members",
      });

      Dream.hasMany(models.DreamGoals, {
        foreignKey: "dreamId",
        as: "goals",
      });

      Dream.hasMany(models.DreamProjects, {
        foreignKey: "dreamId",
        as: "projects",
      });

      Dream.hasMany(models.DreamTasks, {
        foreignKey: "dreamId",
        as: "tasks",
      });
    }
  }
  Dream.init(
    {
      companyId: {
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
        withTasks: () => ({
          include: [
            {
              as: "tasks",
              model: sequelize.model("DreamTasks"),
            },
          ],
        }),

        withProjects: () => ({
          include: [
            {
              as: "projects",
              model: sequelize.model("DreamProjects"),
            },
          ],
        }),

        withGoals: () => ({
          include: [
            {
              as: "goals",
              model: sequelize.model("DreamGoals"),
            },
          ],
        }),

        withCompany: () => ({
          include: [
            {
              as: "company",
              model: sequelize.model("Company"),
            },
          ],
        }),

        withstatus: () => ({
          include: [
            {
              as: "status",
              model: sequelize.model("Status"),
            },
          ],
        }),

        withDreamMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("DreamMember").scope("withUser"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Dream",
    }
  );
  return Dream;
};
