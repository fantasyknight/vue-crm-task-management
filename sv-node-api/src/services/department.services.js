const models = require("../models");

const createDepartment = async (payload) => {
    return await models.Department.create(payload);
};

const getDepartment = async (scopes = [], departmentId) => {
    return await models.Department.scope(scopes).findByPk(departmentId);
};

const getDepartments = async (scopes = [], query = {}, count = false) => {
    if (!count)
        return await models.Department.scope(scopes).findAll(query);
    return await models.Department.scope(scopes).findAndCountAll(query);
};

const updateDepartment = async (id = 0, data = {}) => {
    const result = await models.Department.update(data, { where: { id: id } });
    const res = { success: false, data: {}, message: "" };
    if (!result) {
        res.message = "Error while Updating";
        return res;
    }
    const returnUpdatedData = await models.Department.findByPk(id);

    if (!returnUpdatedData) {
        res.message = 'Error while Fetching Data';
        return res;
    }
    res.success = true;
    res.data = returnUpdatedData.dataValues;
    return res;
};

const getAllDepartments = async () => {
    return await models.Department.findAll();
};

const deleteDepartment = async (id = 0) => {
    try {
        await models.Department.update({ isDeleted: true, }, { where: { id: id, } });
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = {
    createDepartment,
    getDepartment,
    updateDepartment,
    getDepartments,
    deleteDepartment,
    getAllDepartments
};
