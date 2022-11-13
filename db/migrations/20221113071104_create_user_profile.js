/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("user_profile", (table) => {
    table.increments("id").primary();
    table.string("contact", 255).notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("user_info")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTable("user_profile");
};
