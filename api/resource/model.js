const db = require('../../data/dbConfig');

async function findAll(){
    return db('resources');
}

async function insert(body){
    return Promise.resolve({ message: `resource model new insert ${body}` });
}

module.exports = {
    findAll,
    insert
}
