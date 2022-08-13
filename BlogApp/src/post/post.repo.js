const { Post } = require("../database/models");
const { Op, or } = require("sequelize");

//Create
const createPost = async ({ title, body, image, user_id }) => {
  return await Post.create({
    title: title,
    image: image,
    body: body,
    user_id: user_id,
  });
};

//Edit
const editPost = async ({ title, body, image, post_id }) => {
  return await Post.update(
    {
      title,
      body,
      image,
    },
    {
      where: {
        id: post_id,
      },
      returning: true,
    }
  );
};

//FindAll
const getAll = async (tempQuery) => {
  let order = "ASC";
  let limit = 100;
  if (tempQuery.order !== undefined) {
    order = tempQuery.order;
  }

  if (tempQuery.limit !== undefined) {
    limit = tempQuery.limit;
  }

  if (tempQuery.writer !== undefined) {
    if (tempQuery.title !== undefined) {
      return await Post.findAll({
        where: {
          [Op.and]: [
            { user_id: tempQuery.writer },
            {
              title: {
                [Op.substring]: tempQuery.title,
              },
            },
          ],
        },
        order: [["title", order]],
        limit: limit,
      });
    } else {
      return await Post.findAll({
        where: {
          user_id: tempQuery.writer,
        },
        order: [["title", order]],
        limit: limit,
      });
    }
  } else if (tempQuery.title !== undefined) {
    return await Post.findAll({
      where: {
        title: {
          [Op.substring]: tempQuery.title,
        },
      },
      order: [["title", order]],
      limit: limit,
    });
  } else {
    return await Post.findAll({ order: [["title", order]], limit: limit });
  }
};

//Find One
const getOne = async (post_id) => {
  return await Post.findOne({
    where: {
      id: post_id,
    },
  });
};

const postRepo = {
  createPost,
  editPost,
  getAll,
  getOne,
};

module.exports = postRepo;
