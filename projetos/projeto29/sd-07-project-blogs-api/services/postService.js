const Sequelize = require('sequelize');
const config = require('../config/config');

const { Op } = Sequelize;
const sequelize = new Sequelize(config.development);

const { BlogPosts, Category, User } = require('../models');

const postValidation = require('../helpers/validations');
const CustomError = require('../helpers/customError');
const Auth = require('../helpers/authValidations');

const MessageError = (err) => {
  if (err.parent.errno && err.parent.errno === 1452) return '"categoryIds" not found';

  if (err.errors[0].message) return err.errors[0].message;

  return 'unknown error';
};

const AuthProcedure = async (authorization) => {
  try {
    return await Auth.userAutorization(authorization);
  } catch (error) {
    throw new CustomError(error.status, error.message);
  }
};

const createNewPost = async (authorization, blogPost) => {
  const user = await AuthProcedure(authorization);

  postValidation.isPostValid(blogPost);

  const { title, content, categoryIds } = blogPost;
  const userId = user.dataValues.id;

  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPosts.create({ title, content, userId }, { transaction: t });
      const postCategories = await newPost.addCategory(categoryIds, { transaction: t });
      newPost.dataValues.postCategories = postCategories.map((e) => (e.dataValues.categoryId));
      return newPost;
    });

    return result;
  } catch (err) {
    throw new CustomError(400, MessageError(err));
  }
};

const getAllPost = async (authorization) => {
  await AuthProcedure(authorization);

  return BlogPosts.findAll({
    include: [
      { model: Category, through: { attributes: [] }, as: 'categories' },
      { model: User, attributes: { exclude: ['password'] }, as: 'user' }, // as: 'user' },
    ],
  });
};

const getPostById = async (authorization, id) => {
  await AuthProcedure(authorization);

  const post = await BlogPosts.findByPk(id, {
    include: [
      { model: Category, through: { attributes: [] }, as: 'categories' },
      { model: User, attributes: { exclude: ['password'] }, as: 'user' },
    ],
  });

  if (post) return post;

  throw new CustomError(404, 'Post does not exist');
};

const updatePostById = async (authorization, id, body) => {
  const user = await AuthProcedure(authorization);

  postValidation.isPostUpdateValid(body);

  const post = await BlogPosts.findByPk(id, {
    include: [{ model: Category, through: { attributes: [] }, as: 'categories' }],
    // where: { userId: user.dataValues.id },
    attributes: { exclude: ['updated', 'published'] },
  });

  if (!post) throw new CustomError(404, 'Post not found');

  if (post.userId !== user.dataValues.id) throw new CustomError(401, 'Unauthorized user');

  post.title = body.title;
  post.content = body.content;

  return post.update();
};

const deletePostById = async (authorization, id) => {
  const user = await AuthProcedure(authorization);

  const post = await BlogPosts.findByPk(id);

  if (!post) throw new CustomError(404, 'Post does not exist');

  if (post.userId !== user.dataValues.id) throw new CustomError(401, 'Unauthorized user');

  return post.destroy();
};

const getPostByQuery = async (authorization, searchTerm = '') => {
  await AuthProcedure(authorization);
  
  return BlogPosts.findAll({
    include: [
      { model: Category, through: { attributes: [] }, as: 'categories' },
      { model: User, attributes: { exclude: ['password'] }, as: 'user' },
    ],
    where: {
      [Op.or]: [
        { title: { [Op.substring]: searchTerm } },
        { content: { [Op.substring]: searchTerm } },
      ],
    },
  });
};

module.exports = {
  createNewPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
};