const User = require('../models/user.model.js');
const { sign } = require('jsonwebtoken');
const { genSalt, hash } = require('bcryptjs');

const createToken = (_id) => {
  return sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      // create a token
      const token = createToken(user._id);
      res.status(200).json({ name: user.name, email, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  signupUser: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await User.signup(name, email, password);
      // create a token
      const token = createToken(user._id);
      res.status(200).json({ name, email, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const response = await User.find();
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const response = await User.findById(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
  editUser: async (req, res) => {
    let user;
    if (req.body.password) {
      const salt = await genSalt(10);
      const hashed = await hash(req.body.password, 10);
      user = {
        ...req.body,
        password: hashed,
      };
    } else {
      user = {
        ...req.body,
      };
    }
    try {
      const response = await User.findByIdAndUpdate(req.params.id, user);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const response = await User.findByIdAndDelete(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  },
};
