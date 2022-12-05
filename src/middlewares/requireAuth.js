const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
async function requireAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization required' });
  }
  const token = authorization.split(' ')[1];
  try {
    //verify the token
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(_id).select({ _id }); // "select" para retornar só o _id
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
}

module.exports = requireAuth;
