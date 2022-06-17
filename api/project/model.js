async function findAll(){
    return Promise.resolve([{ message: 'project model' }]);
}

async function insert(body){
    return Promise.resolve({ message: `project model new insert ${body}` });
}

module.exports = {
    findAll,
    insert
}