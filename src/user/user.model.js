const knex = require("../knex");

const USER_TABLE = "user_info";

module.exports = {
  USER_TABLE,

  getAll() {
    return knex
      .select({
        id: "id",
        lastName: "last_name",
        firstName: "first_name",
        email: "email",
        password: "password",
        username: "username",
      })
      .from(USER_TABLE);
  },
 /*
  create() {
    return knex
      .insert({
        username: "user.username",
        first_name: "user.first_name",
        last_name: "user.last_name",
        email: "user.email",
        password: "user.password",
        id: "user.id",
      })
      .into(USER_TABLE);
  },
  */
};
