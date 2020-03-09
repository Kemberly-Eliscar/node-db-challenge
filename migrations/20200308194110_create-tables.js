exports.up = async function(knex) {
    await knex.schema
      .createTable("projects", table => {
        table.increments("id");
        table.string("project_name").notNullable();
        table.string("project_description");
        table.boolean("completed").defaultTo(false);
      })
      .createTable("resources", table => {
        table.increments("id");
        table
          .string("resource_name", 128)
          .notNullable()
          .unique();
        table.text("resource_description");
      })
      .createTable("projects_resources", table => {
        table.increments("id");
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      .createTable("tasks", table => {
        table.increments("id");
        table.text("task_description").notNullable();
        table.text("notes");
        table
          .boolean("completed")
          .default(false)
          .notNullable();
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("tasks");
    await knex.schema.dropTableIfExists("projects_resources");
    await knex.schema.dropTableIfExists("resources");
    await knex.schema.dropTableIfExists("projects");
  };
  
