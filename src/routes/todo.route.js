const { Router } = require('express');
const {
  getTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} = require('../controllers/todo.controller.js');
const requireAuth = require('../middlewares/requireAuth.js');

const router = Router();
router.use(requireAuth);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.patch('/:id', editTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
