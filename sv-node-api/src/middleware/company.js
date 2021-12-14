const models = require("../models");
const {winstonLevelLogger} = require("../services/logger.services");

const checkCompanyAdmin = (req, res, next) => {
  winstonLevelLogger.info("Company middleware - checking is admin");
  try {
    const { companyId } = req.params;
    winstonLevelLogger.info("check company admin: " + companyId + "  userId : " + req.user.id + "  isAdmin?: " + req.user.isAdmin);

    if (!req.user.isAdmin) {
      models.Company.findByPk(companyId).then((data) => {
        const company = data.dataValues;
        if (company.userId !== req.user.id) {
          return res.status(403).json({
            message: "You are not company admin.",
          });
        }
      });
    }
    winstonLevelLogger.info("Company middleware - checking completed");
    next();
  } catch (error) {
    winstonLevelLogger.error("Company middleware - checking failed");
    return res.status(500).json({
      message: error.message,
    });
  }
};

const checkCompanyMember = (req, res, next) => {
  try {
    const { companyId } = req.params;

    if (!req.user.isAdmin) {
      models.CompanyMember.findOne({
        where: {
          companyId: companyId,
          userId: req.user.id,
        },
      }).then((companyMember) => {
        if (!companyMember || !companyMember.dataValues) {
          return res.status(403).json({
            message: "You are not the company member.",
          });
        }
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const validateCompany = (req, res, next) => {
  const { companyId } = req.params;
  try {
    models.Company.findOne({
      where: {
        id: companyId,
      },
    }).then((companyOne) => {
      if (!companyOne || !companyOne.dataValues) {
        return res.status(403).json({
          message: "Your company not exist.",
        });
      }
    });

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const checkAdminOrAdminMember = async (req, res, next) => {
  const { companyId } = req.params;
  try {
    if (!req.user.isAdmin) {
      const company = await models.Company.findOne({ where: { id: companyId } });
      if (company.userId !== req.user.id) {
        const companyMember = await models.CompanyMember.findOne({
          where: {
            companyId: companyId,
            userId: req.user.id,
            isAdmin: true,
          },
        });
        if (!companyMember) {
          return res.status(403).json({
            message: "You are not a admin member.",
          });
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

  next();
};

module.exports = {
  checkCompanyAdmin,
  checkCompanyMember,
  validateCompany,
  checkAdminOrAdminMember
};
