/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pets_2", (table) => {
    table.increments("PetID").primary();
    table.string("Name").notNullable();
    table.string("Species").notNullable();
    table.string("Breed").notNullable();
    table.string("Sex").notNullable();
    table.integer("Age").notNullable();
    table.string("Size").notNullable();
    table.string("Colour").notNullable();
    table.string("Description", 2000).notNullable();
    table.string("Image").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
