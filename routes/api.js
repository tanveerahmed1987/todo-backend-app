const express = require("express");
const userController = require("../controller/userController");
const todoController = require("../controller/todoController");
const router = express.Router();

router.get("/", (req, res, next) => res.send("Server is up and running"));
router.post("/register", userController.createUser);

router.post("/todos", todoController.createTodo);
router.get("/todos", todoController.getTodos);
router.delete("/todos/:id", todoController.deleteTodos);

module.exports = router;
