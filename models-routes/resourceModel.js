const db = require('../db-config')
module.exports = {
    get,
    add
}

// this function retrieves a list of resources
function get() {
    return db("resources").then(resource =>
      resource.map(resc => {
        return {
          ...resc,
        };
      })
    );
  }

  // this function adds a resource to the resources table
  function add(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return get(ids);
    });
}