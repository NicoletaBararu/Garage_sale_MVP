const userModel = require("./user.model");

module.exports = {
  async index(req, res) {
    const user = await userModel.getAll();
    console.log(user);
    res.status(200).send(user);
  },
};
