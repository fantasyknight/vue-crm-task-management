/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      // define association here
      Department.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });
    }
  }
  Department.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        withCompany: () => ({
          include: [
            {
              as: "company",
              model: sequelize.model("Company"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
