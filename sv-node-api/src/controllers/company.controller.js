const utils = require("../utils");

const userServices = require("../services/user.services");
const companyServices = require("../services/company.services");
const statusServices = require("../services/status.services");

const getCompany = async (req, res) => {
  const scopes = [
    "withUser",
  ];

  try {
    const { companyId } = req.params;
    const data = await companyServices.getCompany(scopes, companyId);

    if (data == null) {
      return res.status(204).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getCompanyMembers = async (req, res) => {
  const scopes = ["withCompanyMembers"];

  try {
    const { companyId } = req.params;
    const company = await companyServices.getCompany(scopes, companyId);

    return res.status(200).json({
      data: company.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getCompanies = async (req, res) => {
  try {
    let data;
    if (!req.user.isAdmin) {
      data = await companyServices.getMyCompanies(["withCompany"], {
        where: {
          userId: req.user.id,
        },
      });
    } else {
      data = await companyServices.getCompanies(["withUser"], {
        where: {
          isDeleted: false
        }
      });
    }

    if (!data) {
      return res.status(404).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllCompanies = async(req, res) => {
  try {
    const data = await companyServices.getUserCompanies(req.user.id, req.query.page, req.query.limit);

    if(!data.count) {
      return res.status(204).json({
        message: "No data found!",
      });
    }
    return res.status(200).json({
      data: data,
    });
  } catch (error)
  {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createCompany = async (req, res) => {
  try {
    const data = await companyServices.createCompany({
      userId: req.user.id,
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
      location: req.body.location,
      phone: req.body.phone,
      logoUrl: req.body.logoUrl,
    });

    if (data == null) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }
    return res.status(201).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const data = await companyServices.deleteCompany(req.body);
    return res.status(200).json({
      success: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const data = await companyServices.updateCompany(req.body.id, req.body.data);
    if(data.success) {
      return res.status(200).json({
        data : data.data,
      });
    }
    return res.status(400).json({
      message : data.message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};

const inviteToCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const result = [];

    for (const userId of req.body) {
      const data = await companyServices.findOrCreateCompanyMember({
        where: {
          companyId,
          userId,
        },
        default: {
          companyId,
          userId,
        },
      });

      result.push(data[0].dataValues);
    }
    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const inviteToCompanyByEmails = async (req, res) => {
  try {
    const { companyId } = req.params;
    const emails = req.body;
    const payload = [];

    for (const email of emails) {
      const user = await userServices.findOrCreateUser({
        where: {
          email,
        },
        defaults: {
          email,
          token: await utils.generateToken(),
        },
      });
      payload.push({
        companyId,
        userId: user[0].dataValues.id,
      });
    }

    if (!payload.length) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }

    return res.status(201).json({data : payload});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const removeMembers = async (req, res) => {
  try {
    const { companyId } = req.params;

    for (const userId of req.body) {
      await companyServices.removeMember({
        where: {
          userId: userId,
          companyId: companyId,
        },
      });
    }
    return res.status(200).json({
      message: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createCompanyStatus = async (req, res) => {
  try {
    const { companyId } = req.params;
    const data = await statusServices.createStatus({
      companyId,
      title: req.body.title,
      color: req.body.color,
      order: req.body.order,
    });
    if (data == null) {
      return res.status(400).json({
        message: "Cannot create data!",
      });
    }
    return res.status(201).json({
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCompany,
  getCompanyMembers,
  getCompanies,
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  inviteToCompany,
  inviteToCompanyByEmails,
  removeMembers,
  createCompanyStatus,
};
