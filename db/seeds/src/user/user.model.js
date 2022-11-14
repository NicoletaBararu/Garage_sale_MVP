const knex = require("../../../../db/knex");

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
};
