const { Router } = require('express');
const {
  getTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} = require('../controllers/todo.controller');

const router = Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.patch('/:id', editTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
