const db = require('../db-config')
module.exports = {
    get,
    add
}
function get() {
    return db('projects').then(projects => 
        projects.map(project => {
            return {
                ...project,
            };
        })
        );
}

function add(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return get(ids);
    });
}