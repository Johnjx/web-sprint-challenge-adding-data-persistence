const db = require('../../data/dbConfig');

function findAll(){
    return db('projects')
    .then(projects => 
        projects.map(proj => ({
            ...proj,
            project_completed: proj.project_completed ? true : false
        }))
    )
    .catch(err => err)
}

async function insert(body){
    return Promise.resolve({ message: `project model new insert ${body}` });
}

module.exports = {
    findAll,
    insert
}