/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      // define association here
      Message.belongsTo(models.Group, {
        foreignKey: "groupId",
        as: "group",
      });
    }
  }
  Message.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
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
        withGroup: () => ({
          include: [
            {
              as: "group",
              model: sequelize.model("Group"),
            },
          ],
        }),
      },
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
