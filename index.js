const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./config/connection");
const router = require("./routes/api");
const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger("common"));
app.use(router);

app.set("port", port);

// Convert to async syntax
sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);

  app.listen(port, function () {
    console.log("Server started", app.get("port"));
  });
});
