const Todo = require('../models/todo.model.js');

module.exports = {
  getTodos: async (req, res) => {
    try {
      const user_id = req.user._id;
      const response = await Todo.find({ user_id });
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },
  getTodo: async (req, res) => {
    try {
      const response = await Todo.findById(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },
  createTodo: async (req, res) => {
    try {
      const user_id = req.user._id;
      const response = await Todo.create({ ...req.body, user_id });
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },
  editTodo: async (req, res) => {
    try {
      const response = await Todo.findByIdAndUpdate(req.params.id, req.body);
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const response = await Todo.findByIdAndDelete(req.params.id);
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },
};
