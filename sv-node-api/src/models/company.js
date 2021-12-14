/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      Company.hasMany(models.CompanyMember, {
        foreignKey: "companyId",
        as: "members",
      });

      Company.hasMany(models.Status, {
        foreignKey: "companyId",
        as: "status",
      });
    }
  }
  Company.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      logoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isDeleted: {
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

        withCompanyMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("CompanyMember").scope("withUser"),
            },
          ],
        }),

        withStatus: () => ({
          include: [
            {
              as: "status",
              model: sequelize.model("Status"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
