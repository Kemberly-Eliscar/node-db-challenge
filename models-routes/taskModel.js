const db = require("../db-config");
const conv = require("./convertor");

module.exports = {
  get,
  add
};

function get(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select("projects.project_name", "projects.project_description")
    .where("tasks.project_id", id)
    .then(tasks =>
      tasks.map(task => {
        return {
          ...task,
          completed: conv.convBoolean(task.completed)
        };
      })
    );
}
function add(task) {
  return db("tasks").insert(task);
}