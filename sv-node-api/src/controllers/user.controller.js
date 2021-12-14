const models = require("../models");

const inviteUserToCompany = (req, res) => {
  try {
    const { userIds, companyId } = req.body;
    if (!userIds || !userIds.length || !companyId) {
      return res.status(400).json({
        message: "Wrong data submitted",
      });
    }

    const payload = Array.from(userIds, (userId) => ({
      userId,
      companyId,
    }));
    models.CompanyMember.bulkCreate(payload)
      .then(() => {
        return res.status(200).json({
          mssage: "Successfully invited",
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const inviteUser = (req, res) => {
  try {
    const { companyId, user } = req.body;
    models.User.create({
      email: user.email,
    })
      .then((result) => {
        models.CompanyMember.create({
          companyId,
          userId: result.dataValues.id,
        })
          .then(() => {
            return res.status(200).json({
              message: "Successfully Invited",
            });
          })
          .catch((error) => {
            return res.status(500).json({
              message: error.message,
            });
          });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getUsers = (req, res) => {
  const scopes = ["withoutPassword", "withoutToken", "withProfile"];

  try {
    models.User.scope(scopes)
      .findAll({})
      .then((data) => {
        return res.status(200).json({
          success: true,
          data: data,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  inviteUser,
  inviteUserToCompany,
};
