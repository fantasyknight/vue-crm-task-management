/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GroupMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GroupMember.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      GroupMember.belongsTo(models.Group, {
        foreignKey: "groupId",
        as: "group",
      });
    }
  }
  GroupMember.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      scopes: {
        withGroup: () => ({
          include: [
            {
              as: "group",
              model: sequelize.model("Group"),
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
      modelName: "GroupMember",
    }
  );
  return GroupMember;
};
