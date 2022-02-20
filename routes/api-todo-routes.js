const express = require('express');
const {
  getTodos,
  addTodo,
  getTodo, 
  deleteTodo,
  editTodo,
} = require('../controllers/api-todo-controller');

const router = express.Router();


router.get('/api/todos', getTodos);

router.post('/api/todos/', addTodo);

router.get('/api/todos/:id', getTodo);

router.delete('/api/todos/:id', deleteTodo);

router.put('/api/todos/:id', editTodo);

module.exports = router;
