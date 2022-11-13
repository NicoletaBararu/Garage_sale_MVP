/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_info').del()
  await knex("user_info").insert([
    {
      id: 1,
      email: "noemail@yahoo.com",
      password: "12345",
      first_name: "Maya",
      last_name: "Freeman",
      username: "maya",
    },
    {
      id: 2,
      email: "test@yahoo.com",
      password: "56578",
      first_name: "Lala",
      last_name: "Domi",
      username: "lala",
    },
  ]);
};
