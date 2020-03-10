exports.up = async function(knex) {
  await knex.schema
  // creates projects table
    .createTable("projects", table => {
      table.increments("id"); // unique id
      table.string("project_name").notNullable(); // name of column
      table.string("project_description"); // description
      table.boolean("completed").defaultTo(false); // boolean that indicates if the project has been completed. default value should be false. 
    })

    //creates resources table
    .createTable("resources", table => {
      table.increments("id"); // unique id
      table
        .string("resource_name", 128) // name of column
        .notNullable() // makes that column a required field
        .unique(); // makes it unique to prevent duplicate names
      table.text("resource_description"); // a description column
    })

    //creates projects_resource table. 
    //The join table for projects and resources since its a many to many connection.
    .createTable("projects_resources", table => {
      table.increments("id"); 
      table
        .integer("project_id") // foreign key linking project_id from id column in projects table to projects_resources table
        .unsigned() // forces the integer to be positive
        .notNullable() // Mandatory field
        .references("id")
        .inTable("projects") // will work as a reference point because the projects table is already created
        .onUpdate("CASCADE") //will update changes made to this field in this table too
        .onDelete("CASCADE"); // updates all tables if this column is deleted
      table
        .integer("resource_id") // foreign key linking resource id from resource table into project_resources table
        .unsigned() 
        .notNullable()
        // going to reference the id column
        .references("id")
        //in resources table
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    //creates tasks table and foreign key for project_id being that theres a 1:* relationship
    .createTable("tasks", table => {
      table.increments("id"); // unique id
      table.text("task_description").notNullable(); // a required column of a description of what needs to be down
      table.text("notes"); // notes column to add additional info
      table
        .boolean("completed") // a boolean that indicates if the task has been completed. 
        .default(false) // makes the default value FALSE 
        .notNullable(); // prevents this column from being NULL
      table
        .integer("project_id") // foreign key linking project_id from project table into task table
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