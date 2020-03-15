const db = require("../db-config");
const conv = require("./convertor");

// these are the methods being used to retrieve and add from task table
module.exports = {
  get,
  add
};

function get(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id") // join projects on projects.id = tasks.project.id
    .select("projects.project_name", "projects.project_description") // select project name and project description from projects table
    .where({project_id: id}) //fixed this reference point from task_id to project_id
    .then(tasks =>
      tasks.map(task => {
        return {
          ...task,
          completed: conv.convBoolean(task.completed) // this sets the boolean default value to false 
        };
      })
    );
 }
function add(task) {
  return db("tasks").insert(task);
}