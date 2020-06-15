const User = require("../models/user");

module.exports = {
  createUser: async function (req, res, next) {
    let user = req.body;
    user.isEnabled = 1;
    const userObj = await User.create(user);
    res.send(userObj);
  },
};
