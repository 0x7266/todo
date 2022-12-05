const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    text: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Todo', todoSchema);
