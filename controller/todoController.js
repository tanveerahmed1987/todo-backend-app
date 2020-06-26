const Todo = require("../models/todo");

module.exports = {
  createTodo: async function (req, res, next) {
    let todo = req.body;
    const todoObj = await Todo.create(todo);
    res.send(todoObj);
  },
  getTodos: async function (req, res, next) {
    const todos = await Todo.findAll();
    res.send(todos);
  },
  deleteTodos: async function (req, res, next) {
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({});
  },
};
