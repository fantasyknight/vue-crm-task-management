const utils = require("../utils");

const userServices = require("../services/user.services");
const dreamServices = require("../services/dream.services");
const favoriteServices = require("../services/favorite.services");

const getDream = async (req, res) => {
  const scopes = [
    "withCompany",
    "withStatus",
    "withTasks",
    "withProjects",
    "withGoals",
  ];

  try {
    const data = await dreamServices.getDream(scopes, req.params.dreamId);

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getDreamMembers = async (req, res) => {
  // const scopes = ['withDreamMembers'];

  try {
    const { dreamId } = req.params;
    const dream = await dreamServices.getDream([], dreamId);

    return res.status(200).json({
      data: dream,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getDreams = async (req, res) => {
  const scopes = [];
  
  try {
    const { companyId } = req.params;
    let data;
    let count = 0;
    if (req.query && req.query.page != null && req.query.limit != null) {
      data = await dreamServices.getDreams(
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
      data = await dreamServices.getDreams(scopes, {where: {companyId}});
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

const getAllDreams = async(req, res) => {
  try {
    const data = await dreamServices.getUserDreams(req.user.id, req.query.page, req.query.limit);

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

const createDream = async (req, res) => {
  try {
    const dream = await dreamServices.createDream({
      companyId: req.body.companyId,
      statusId: req.body.statusId,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      budget: req.body.budget,
      isDone: req.body.isDone,
    });

    return res.status(201).json({
      data: dream,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteDream = async (req, res) => {
  try {
    const data = await dreamServices.deleteDream(req.body);
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

const updateDream = async (req, res) => {
  try {
    const data = await dreamServices.updateDream(req.body.id, req.body.data);
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

const getDreamComment = async (req, res) => {
  const scopes = [];

  try {
    const { commentId } = req.params;
    const data = await dreamServices.getDreamComment(scopes, commentId);

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

const getDreamComments = async (req, res) => {
  const scopes = [];

  try {
    const { dreamId } = req.params;
    const data = await dreamServices.getDreamComments(scopes, {
      where: {
        dreamId,
      },
    });
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

const createDreamComment = async (req, res) => {
  try {
    const dreamcomment = await dreamServices.createDreamComment({
      userId: req.user.id,
      dreamId: req.params.dreamId,
      comment: req.body.comment,
    });

    return res.status(201).json({
      data: dreamcomment.dataValues,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addFavorite = async (req, res) => {
  try {
    const user = await userServices.getUserById([], req.user.id);
    favoriteServices.addDreamFavorite({
      userId: user.id,
      dreamId: req.params.dreamId,
    });

    return res.status(201).json({
      message: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const data = favoriteServices.removeDreamFavorite({
      userId: "" + req.user.id,
      dreamId: req.params.dreamId,
    });
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

const inviteToDream = async (req, res) => {
  try {
    const { dreamId } = req.params;
    const result = [];
    for (const userId of req.body) {

      result.push(await dreamServices.findOrCreateDreamMember({
        where: {
          dreamId,
          userId,
        },
        default: {
          dreamId,
          userId,
        },
      })[0]);
    }
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const inviteToDreamByEmails = async (req, res) => {
  let payload = [];
  try {
    const emails = req.body;

    for (const email of emails) {
      payload.push(await userServices.findOrCreateUser({
        where: {
          email,
        },
        defaults: {
          email,
          token: utils.generateToken(),
        },
      })[0]);
    }
    return res.status(201).json({data : payload});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const removeMembers = async (req, res) => {
  try {
    const { dreamId } = req.params;
    const data = await dreamServices.removeMember(req.body, dreamId);
    if (data) {
      return res.status(200).json({});
    }
    return res.status(400).json({});
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
};

const isFavorite = async (req, res) => {
  try {
    const data = favoriteServices.isDreamFavorite({
      userId: "" + req.user.id,
      dreamId: req.params.dreamId,
    });
    return res.status(200).json({
      message: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDream,
  getDreamMembers,
  getAllDreams,
  getDreams,
  createDream,
  deleteDream,
  updateDream,

  getDreamComment,
  getDreamComments,
  createDreamComment,

  inviteToDream,
  inviteToDreamByEmails,
  removeMembers,

  addFavorite,
  removeFavorite,
  isFavorite,
};
