/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CompanyMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CompanyMember.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      CompanyMember.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });
    }
  }
  CompanyMember.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      companyId: {
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
        withCompany: () => ({
          include: [
            {
              as: "company",
              model: sequelize.model("Company"),
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
      modelName: "CompanyMember",
    }
  );
  return CompanyMember;
};
