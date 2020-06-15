const Todo = require("../models/todo");

module.exports = {
  createTodo: async function (req, res, next) {
    let todo = req.body;
    const todoObj = await Todo.create(todo);
    res.send(todoObj);
  },
};
