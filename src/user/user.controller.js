const userModel = require("./user.model");

module.exports = {
  async index(req, res) {
    const user = await userModel.getAll();
    //console.log(user);
    res.status(200).send(user);
  },
 /*
  async save(req, res) {
    const { id, email, password, username, first_name, last_name } = req.body;

    const payload = {
      id: id,
      firstName: first_name,
      lastName: last_name,
      email: email,
      password: password,
      username: username,
    };

    let newUser = payload;
     await userModel.create(newUser);
    console.log(payload);
    //res.redirect('/mypage');
    res.status(200).send(newUser);
  },
  */
};
