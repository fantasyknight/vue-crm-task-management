const utils = require("../utils");

const userServices = require("../services/user.services");
const groupServices = require("../services/group.services");

const getGroup = async (req, res) => {
    const scopes = [
        "withGroupMembers",
    ];

    try {
        const { groupId } = req.params;
        const data = await groupServices.getGroup(scopes, groupId);

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

const getGroupMembers = async (req, res) => {
    const scopes = ["withGroupMembers"];

    try {
        const { groupId } = req.params;
        const group = await groupServices.getGroup(scopes, groupId);

        return res.status(200).json({
            data: group.dataValues,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getGroups = async (req, res) => {
    try {
        let data = await groupServices.getGroups({
            where: {
                isDeleted: false
            }
        });

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

const getAllGroups = async (req, res) => {
    try {
        const data = await groupServices.getUserGroups(req.user.id, req.query.page, req.query.limit);

        if (!data.count) {
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

const createGroup = async (req, res) => {
    try {
        const data = await groupServices.createGroup({
            userId: req.user.id,
            title: req.body.title,
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

const deleteGroup = async (req, res) => {
    try {
        const { groupId } = req.params;
        const data = await groupServices.deleteGroup(groupId);
        return res.status(200).json({
            success: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateGroup = async (req, res) => {
    try {
        const data = await groupServices.updateGroup(req.body.id, req.body.data);
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
            success: false,
            data: error.message,
        });
    }
};

const inviteToUser = async (req, res) => {
    try {
        const { groupId } = req.params;
        const result = [];

        for (const userId of req.body) {
            const data = await groupServices.findOrCreateGroupMember({
                where: {
                    groupId,
                    userId,
                },
                default: {
                    groupId,
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

const inviteToUserByEmails = async (req, res) => {
    try {
        const { groupId } = req.params;
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
                groupId,
                userId: user[0].dataValues.id,
            });
        }

        if (!payload.length) {
            return res.status(400).json({
                message: "Cannot create data!",
            });
        }

        return res.status(201).json({ data: payload });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const removeMembers = async (req, res) => {
    try {
        const { groupId } = req.params;

        for (const userId of req.body) {
            await groupServices.removeMember({
                where: {
                    userId: userId,
                    groupId: groupId,
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


module.exports = {
    getGroup,
    getGroupMembers,
    getGroups,
    getAllGroups,
    createGroup,
    updateGroup,
    deleteGroup,
    inviteToUser,
    inviteToUserByEmails,
    removeMembers,
};
