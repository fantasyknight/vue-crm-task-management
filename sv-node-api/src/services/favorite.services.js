const models = require("../models");

/**
 * Set dream as favorite for current user
 * @param {object} payload
 * @return {boolean}
 */
const addDreamFavorite = async (payload) => {
  try {
    const favoriteItem = await models.DreamFavorite.findAll({
      where: {
        userId: payload.userId,
        dreamId: payload.dreamId
      },
    });
    if (!favoriteItem.length) {
      await models.DreamFavorite.create(payload);
    }
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * remove favorite dream from current user
 * @param {object} payload
 * @return {boolean}
 */
const removeDreamFavorite = async (payload) => {
  await models.DreamFavorite.destroy({
    where: {
      userId: payload.userId,
      dreamId: payload.dreamId
    },
  });
  return true;
};

/**
 * check if dream is favorite for current user
 * @param {object} payload
 * @return {boolean}
 */
const isDreamFavorite = async (payload) => {
  try {
    const favoriteItem = await models.DreamFavorite.findAll({
      where: {
        userId: payload.userId,
        dreamId: payload.dreamId
      },
    });
    if (favoriteItem.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const addGoalFavorite = async (payload) => {
  try {
    const favoriteItem = await models.GoalFavorite.findAll({
      where: {
          userId: payload.userId,
          goalId: payload.goalId
      },
    });
    if (!favoriteItem.length) {
      await models.GoalFavorite.create(payload);
    }
    return true;
  } catch (error) {
    return false;
  }
};

const removeGoalFavorite = async (payload) => {
  await models.GoalFavorite.destroy({
    where: {
        userId: payload.userId,
        goalId: payload.goalId
    },
  });
  return true;
};

const isGoalFavorite = async (payload) => {
  try {
    const favoriteItem = await models.GoalFavorite.findAll({
      where: {
        userId: payload.userId,
        goalId: payload.goalId
      },
    });
    if (favoriteItem.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const addProjectFavorite = async (payload) => {
  try {
    const favoriteItem = await models.ProjectFavorite.findAll({
      where: {
        userId: payload.userId,
        projectId: payload.projectId
      },
    });
    if (!favoriteItem.length) {
      await models.ProjectFavorite.create(payload);
    }
    return true;
  } catch (error) {
    return false;
  }
};

const removeProjectFavorite = async (payload) => {
  await models.ProjectFavorite.destroy({
    where: {
      userId: payload.userId,
      projectId: payload.projectId
    },
  });
  return true;
};

const isProjectFavorite = async (payload) => {
  try {
    const favoriteItem = await models.ProjectFavorite.findAll({
      where: {
          userId: payload.userId,
          projectId: payload.projectId
      },
    });
    if (favoriteItem.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const addTaskFavorite = async (payload) => {
  try {
    const favoriteItem = await models.TaskFavorite.findAll({
      where: {
        userId: payload.userId,
        taskId: payload.taskId
      },
    });
    if (!favoriteItem.length) {
      await models.TaskFavorite.create(payload);
    }
    return true;
  } catch (error) {
    return false;
  }
};

const removeTaskFavorite = async (payload) => {
  try {
    await models.TaskFavorite.destroy({
      where: {
          userId: payload.userId,
          taskId: payload.taskId
      },
    });
    return true;
  } catch(error) {
    return false;
  }
};

const isTaskFavorite = async (payload) => {
  try {
    const favoriteItem = await models.TaskFavorite.findAll({
      where: {
        userId: payload.userId,
        taskId: payload.taskId
      },
    });
    if (favoriteItem.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const addSubTaskFavorite = async (payload) => {
  try {
    const favoriteItem = await models.SubTaskFavorite.findAll({
      where: {
        userId: payload.userId,
        subtaskId: payload.subtaskId
      },
    });
    if (!favoriteItem.length) {
      await models.SubTaskFavorite.create(payload);
    }
    return true;
  } catch (error) {
    return false;
  }
};

const removeSubTaskFavorite = async (payload) => {
  await models.SubTaskFavorite.destroy({
    where: {
      userId: payload.userId,
      subtaskId: payload.subtaskId
    },
  });
  return true;
};

const isSubTaskFavorite = async (payload) => {
  try {
    const favoriteItem = await models.SubTaskFavorite.findAll({
      where: {
        userId: payload.userId,
        subtaskId: payload.subtaskId
      },
    });
    if (favoriteItem.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

module.exports = {
  addDreamFavorite,
  removeDreamFavorite,
  isDreamFavorite,

  addGoalFavorite,
  removeGoalFavorite,
  isGoalFavorite,

  addProjectFavorite,
  removeProjectFavorite,
  isProjectFavorite,

  addTaskFavorite,
  removeTaskFavorite,
  isTaskFavorite,

  addSubTaskFavorite,
  removeSubTaskFavorite,
  isSubTaskFavorite,
};
