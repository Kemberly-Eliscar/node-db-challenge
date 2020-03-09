
// exports.up = function(knex) {
//     // 1 project has many task
//     return knex.schema.createTable('projects', tbl => {
//         // tbl.increments creates our unique primary id
//         tbl.increments()

//         // this adds a project_name field with a 128 character limit and is required. 
//         tbl.string('project_name', 128).notNullable()

//         //this adds the project_description field.
//         tbl.string('project_desc')

//         // this adds the project status field with a boolean default value of false. 
//         tbl.boolean('project_status')
//     })
//     .createTable('tasks', tbl => {
//         tbl.increments();
//         tbl.string('task_desc').notNullable()
//         tbl.string('notes', 128)
//         tbl.boolean('completed')

//         // foreign key that points to projects table
//         tbl.integer('project_id')
//         .unsigned() //this means that our integer must be positive
//         .notNullable() //this means this field is required
//         .references('id') //this method indicates which field this actually references 
//         .inTable('projects') //This specify which table this id field is in.
//     })
  
// };

// exports.down = function(knex) {
//     // we always undo files in the reverse way we set them up. 
//     // so if we first set up the projects table and then the tasks table, 
//     // then the task table should be deleted first and then the projects table. 
//     return knex.schema.dropTableIfExists('tasks')
//     .dropTableIfExists('projects')
  
// };
