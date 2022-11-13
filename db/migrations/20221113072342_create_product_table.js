/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("product", (table) => {
    table.increments("product_id").primary();
    table.string("name", 255).notNullable();
    table.string("description", 255).notNullable();
    table.string("category", 255).notNullable();
    table.decimal("price", 32, 2);
    table.string("image", 255);
    table
      .integer("user_id")
      .references("id")
      .inTable("user_profile")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTable("product");
};
