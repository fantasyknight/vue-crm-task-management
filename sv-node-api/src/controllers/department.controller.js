const departmentServices = require("../services/department.services");
const {winstonLevelLogger} = require("../services/logger.services");

const createDepartment = async (req, res) => {
    try {
        const data = await departmentServices.createDepartment({
            title: req.body.title,
            companyId: req.body.companyId,
            isDeleted: req.body.isDeleted,
        });
        if (data == null) {
            return res.status(400).json({
                message: "Cannot create data!",
            });
        }
        res.status(201).json({
            data: data.dataValues,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getDepartment = async (req, res) => {
    const scopes = [];

    try {
        const { departmentId } = req.params;
        const data = await departmentServices.getDepartment(
            scopes,
            departmentId
        );

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

const updateDepartment = async (req, res) => {
    try {
        const data = await departmentServices.updateDepartment(req.body.id, req.body.data);
        if (data.success) {
            return res.status(200).json({
                data: data.data,
            });
        }
        return res.status(400).json({
            message: data.message,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getDepartments = async (req, res) => {
    const scopes = ["withCompany"];
    try {
      const { companyId } = req.params;
      let data;
      let count = 0;
      if (req.query && req.query.page != null && req.query.limit != null) {
        data = await departmentServices.getDepartments(
          scopes,
          {
            offset: (parseInt(req.query.page) - 1) * parseInt(req.query.limit),
            limit: parseInt(req.query.limit),
            where: { companyId },
          },
          true
        );
        count = data.count;
      } else {
        data = await departmentServices.getDreams(scopes, {where: {companyId}});
        count = data.length;
      }
  
      if (!count) {
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

const getAllDepartments = async (req, res) => {
    try {
        const data = await departmentServices.getAllDepartments();

        if (!data.length) {
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

const deleteDepartment = async (req, res) => {
    try {
        const { departmentId } = req.params;
        winstonLevelLogger.info(departmentId);
        const data = await departmentServices.deleteDepartment(departmentId);
        if (data) {
            return res.status(200).json({});
        }
        return res.status(400).json({});
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
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
