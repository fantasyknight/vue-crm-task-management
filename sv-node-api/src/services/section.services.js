const models = require("../models");

const getSection = async (scopes = [], taskId) => {
    return await models.Section.scope(scopes).findByPk(taskId);
};

const getSections = async (scopes = [], query = {}, count = false) => {
    if (!count) return await models.Section.scope(scopes).findAll();
    return await models.Section.scope(scopes).findAndCountAll(query);
};

const getUserSections = async (userId, page, limit) => {
    return await models.Section.scope('withTask').findAndCountAll({
        offset: (parseInt(page) - 1) * parseInt(limit),
        limit: parseInt(limit),
        where: { userId }
    });
    return await models.Section.scope('withTasks').findAll();
};


const createSection = async (payload = {}) => {
    const section = await models.Section.create(payload);
    return await getSection([], section.dataValues.id);
};

const deleteSection = async (data = []) => {
    try {
        await models.Section.update({ isDeleted: true }, { where: { id: data } });
        return true;
    } catch (error) {
        return false;
    }
};

const updateSection = async (id = 0, data = {}) => {
    const result = await models.Section.update(data, { where: { id: id } });
    const res = { success: false, data: {}, message: "" };
    if (!result) {
        res.message = "Error while Updating";
        return res;
    }
    const returnUpdatedData = await models.Section.findByPk(id);
    if (!returnUpdatedData) {
        res.message = "Error while Fetching Data";
        return res;
    }
    res.success = true;
    res.data = returnUpdatedData.dataValues;
    return res;
};


module.exports = {
    getSection,
    getSections,
    getUserSections,

    createSection,
    updateSection,
    deleteSection,
};
