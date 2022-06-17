const db = require('../../data/dbConfig');

async function findAll(){
    return db('resources');
}

function insert(resource){
    return db('resources')
    .insert(resource)
    .then(([resource_id]) => {
        return db('resources')
        .where({ resource_id })
        .first();
    });
}

module.exports = {
    findAll,
    insert
}
