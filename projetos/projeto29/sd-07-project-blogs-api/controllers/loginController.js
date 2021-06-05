const Login = require('../services');

const authenticate = async (req, res, next) => {
  try {
    const token = await Login.authenticate(req.body);
    return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
};
