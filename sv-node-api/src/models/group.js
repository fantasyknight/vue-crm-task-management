/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Group.hasMany(models.GroupMember, {
        foreignKey: "groupId",
        as: "members",
      });
    }
  }
  Group.init(
    {
      title: {
        type: DataTypes.STRING,
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

        withGroupMembers: () => ({
          include: [
            {
              as: "members",
              model: sequelize.model("GroupMember").scope("withUser"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Group",
    }
  );
  return Group;
};
