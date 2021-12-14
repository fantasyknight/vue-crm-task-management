/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {
        foreignKey: "userId",
        as: "profile",
      });

      User.hasMany(models.DreamMember, {
        foreignKey: "userId",
        as: "dreams",
      });

      // User.hasMany(models.Company, {
      //   foreignKey: 'userId',
      //   as: 'companies',
      // });

      // User.hasMany(models.CompanyMember, {
      //   foreignKey: 'userId',
      //   as: 'companyMembers',
      // });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      defaultScope: {
        where: {
          isDeleted: false,
        },
      },
      scopes: {
        withoutPassword: () => ({
          attributes: {
            exclude: ["password"],
          },
        }),
        withoutToken: () => ({
          attributes: {
            exclude: ["token"],
          },
        }),
        withDeletedUser: () => ({
          where: {
            isDeleted: false,
          },
        }),
        withProfile: () => ({
          include: [
            {
              as: "profile",
              model: sequelize.model("Profile"),
            },
          ],
        }),
        byIds: (userIds) => ({
          where: {
            id: { [Op.in]: userIds },
          },
        }),
      },
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
