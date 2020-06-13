const Sequelize = require("sequelize");

const option = {
  host: "localhost",
  dialect: "mysql",
};
const sequelize = new Sequelize("todoapp", "root", "admin123", option);

module.exports = sequelize;
