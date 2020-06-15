const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Todo = sequelize.define("todo", {
  todo: { type: Sequelize.STRING },
  isCompleted: { type: Sequelize.BOOLEAN },
});

module.exports = Todo;
