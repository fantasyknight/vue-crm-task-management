/* eslint-disable valid-jsdoc */
const models = require("../models");

/**
 * Get one Company information
 * @param {array} scopes
 * @param {integer|string} companyId
 * @return {Promise<models.Company>} company
 */
const getCompany = async (scopes = [], companyId) => {
  const data = await models.Company.scope(scopes).findByPk(companyId);
  return data;
};

/**
 * Get companies
 * This would be restricted by only admin
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<array<models.Company>>} companies
 */
const getCompanies = async (scopes = [], query = {}) => {
  return await models.Company.scope(scopes).findAll(query);
};

/**
 * Get user companies
 * @param {number} userId 
 * @param {number} page 
 * @param {number} limit 
 * @returns {Promize<array<models.Company>>} companies
 */
const getUserCompanies = async(userId, page, limit) => {
  return await models.CompanyMember.scope('withCompany').findAndCountAll({
    offset: (parseInt(page) - 1) * parseInt(limit),
    limit: parseInt(limit),
    where: { userId }
  });
};

/**
 * Get my companies
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<array<models.CompanyMember>>} companies
 */
const getMyCompanies = async (scopes = [], query = {}) => {
  return await models.CompanyMember.scope(scopes).findAll(query);
};

/**
 * Create a new company
 * @param {object} payload
 * @return {Promise<models.CompanyMember>} company
 */
const createCompany = async (payload) => {
  const company = await models.Company.create(payload);
  const companyMember = await models.CompanyMember.create({
    userId: payload.userId,
    companyId: company.dataValues.id,
  });

  return {
    ...companyMember.dataValues,
    company: company.dataValues,
  };
};

const deleteCompany = async (data) => {
  try {
    await models.Company.update({ isDeleted: true }, { where: { id: data } });
    await models.Dream.update(
      { isDeleted: true },
      { where: { companyId: data } }
    );
    await models.Goal.update(
      { isDeleted: true },
      { where: { companyId: data } }
    );
    await models.Project.update(
      { isDeleted: true },
      { where: { companyId: data } }
    );
    await models.Task.update(
      { isDeleted: true },
      { where: { companyId: data } }
    );

    return true;
  } catch (error) {
    return false;
  }
};

const updateCompany = async (id = 0, data = {}) => {
  const result = await models.Company.update(data, { where: { id: id } });
  const res = { success: false, data: {}, message: "" };
  if (!result) {
    res.message = "Error while Updating";
    return res;
  }
  const returnUpdatedData = await models.Company.findByPk(id);
  if (!returnUpdatedData) {
    res.message = "Error while Fetching Data";
    return res;
  }
  res.success = true;
  res.data = returnUpdatedData.dataValues;
  return res;
};

const createCompanyMembers = async (payload) => {
  return await models.CompanyMember.bulkCreate(payload);
};

const findOrCreateCompanyMember = async (payload) => {
  return await models.CompanyMember.findOrCreate(payload);
};

const removeMember = async (payload) => {
  await models.CompanyMember.destroy(payload);
  return true;
};

module.exports = {
  getCompany,
  getCompanies,
  getUserCompanies,
  getMyCompanies,
  createCompany,
  deleteCompany,
  updateCompany,
  createCompanyMembers,
  findOrCreateCompanyMember,
  removeMember,
};
