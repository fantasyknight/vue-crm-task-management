/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GoalMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoalMember.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });

      GoalMember.belongsTo(models.Goal, {
        foreignKey: "goalId",
        as: "goal",
      });
    }
  }
  GoalMember.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      goalId: {
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
        withGoal: () => ({
          include: [
            {
              as: "goal",
              model: sequelize.model("Goal"),
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
      modelName: "GoalMember",
    }
  );
  return GoalMember;
};
