/* eslint-disable valid-jsdoc */
const models = require("../models");

/**
 * Get one Company information
 * @param {array} scopes
 * @param {integer|string} companyId
 * @return {Promise<models.Company>} company
 */
const getGroup = async (scopes = [], groupId) => {
    const data = await models.Group.scope(scopes).findByPk(groupId);
    return data;
};

/**
 * Get groups
 * This would be restricted by only admin
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<array<models.Group>>} groups
 */
const getGroups = async (query = {}) => {
    return await models.Group.findAll(query);
};

/**
 * Get my groups
 * @param {array} scopes
 * @param {object} query
 * @return {Promise<array<models.GroupMember>>} groups
 */
const getMyGroups = async (scopes = [], query = {}) => {
    return await models.GroupMember.scope(scopes).findAll(query);
};

const getUserGroups = async(userId, page, limit) => {
    return await models.GroupMember.scope('withGroup').findAndCountAll({
      offset: (parseInt(page) - 1) * parseInt(limit),
      limit: parseInt(limit),
      where: { userId }
    });
  };

/**
 * Create a new company
 * @param {object} payload
 * @return {Promise<models.CompanyMember>} company
 */
const createGroup = async (payload) => {
    const group = await models.Group.create(payload);
    const groupMember = await models.GroupMember.create({
        userId: payload.userId,
        groupId: group.dataValues.id,
    });

    return {
        ...groupMember.dataValues,
        group: group.dataValues,
    };
};

const deleteGroup = async (data) => {
    try {
        await models.Group.update({ isDeleted: true }, { where: { id: data } });
        await models.GroupMember.update(
            { isDeleted: true },
            { where: { groupId: data } }
        );
        await models.Message.update(
            { isDeleted: true },
            { where: { groupId: data } }
        );

        return true;
    } catch (error) {
        return false;
    }
};

const updateGroup = async (id = 0, data = {}) => {
    const result = await models.Group.update(data, { where: { id: id } });
    const res = { success: false, data: {}, message: "" };
    if (!result) {
        res.message = "Error while Updating";
        return res;
    }
    const returnUpdatedData = await models.Group.findByPk(id);
    if (!returnUpdatedData) {
        res.message = "Error while Fetching Data";
        return res;
    }
    res.success = true;
    res.data = returnUpdatedData.dataValues;
    return res;
};

const createGroupMembers = async (payload) => {
    return await models.GroupMember.bulkCreate(payload);
};

const findOrCreateGroupMember = async (payload) => {
    return await models.GroupMember.findOrCreate(payload);
};

const removeMember = async (payload) => {
    await models.GroupMember.destroy(payload);
    return true;
};

module.exports = {
    getGroup,
    getGroups,
    getMyGroups,
    getUserGroups,
    createGroup,
    deleteGroup,
    updateGroup,
    createGroupMembers,
    findOrCreateGroupMember,
    removeMember,
};
