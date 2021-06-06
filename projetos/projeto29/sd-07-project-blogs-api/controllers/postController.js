// const CODES = require('../configurations/statusCodes');

const Post = require('../services');

const createNewPost = async (req, res, next) => {
  const post = req.body;
  const { authorization } = req.headers;
  try {
    const newPost = await Post.createNewPost(authorization, post);
    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

const getAllPost = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const posts = await Post.getAllPost(authorization);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  try {
    const posts = await Post.getPostById(authorization, id);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const updatePostById = async (req, res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  try {
    const post = await Post.updatePostById(authorization, id, req.body);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const deletePostById = async (req, res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  try {
    const post = await Post.deletePostById(authorization, id);
    res.status(204).json(post);
  } catch (error) {
    next(error);
  }
};

const getPostByQuery = async (req, res, next) => {
  const { authorization } = req.headers;
  
  const searchQuery = req.query.q;
  try {
    const posts = await Post.getPostByQuery(authorization, searchQuery);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByQuery,
};
