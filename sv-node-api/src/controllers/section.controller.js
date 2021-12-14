const sectionServices = require("../services/section.services");

const getSection = async (req, res) => {
    try {
        const { sectionId } = req.params;
        const data = await sectionServices.getSection(["withTasks"], sectionId);

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

const getAllSections = async (req, res) => {
    try {
        // const data = await sectionServices.getUserSections(req.user.id, req.query.page, req.query.limit);
        const data = await sectionServices.getSections(["withTasks"]);

        // if (!data.count) {
        //     return res.status(204).json({
        //         message: "No data found!",
        //     });
        // }
        return res.status(200).json({
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const createSection = async (req, res) => {
    try {
        const data = await sectionServices.createSection({
            title: req.body.title
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

const deleteSection = async (req, res) => {
    try {
        const data = await sectionServices.deleteSection(req.body);
        if (data > 0) {
            return res.status(200).json({});
        } else {
            return res.status(400).json({});
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateSection = async (req, res) => {
    try {
        const data = await sectionServices.updateSection(req.body.id, req.body.data);
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

module.exports = {
    getSection,
    getAllSections,

    createSection,
    deleteSection,
    updateSection
};
