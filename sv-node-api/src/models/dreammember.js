/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DreamMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DreamMember.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      DreamMember.belongsTo(models.Dream, {
        foreignKey: "dreamId",
        as: "dream",
      });
    }
  }
  DreamMember.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dreamId: {
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
        withDream: () => ({
          include: [
            {
              as: "dream",
              model: sequelize.model("Dream"),
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
      modelName: "DreamMember",
    }
  );
  return DreamMember;
};
