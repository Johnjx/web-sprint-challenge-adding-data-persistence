async function findAll(){
    return Promise.resolve([{ message: 'task model' }]);
}

async function insert(body){
    return Promise.resolve({ message: `task model new insert ${body}` });
}

module.exports = {
    findAll,
    insert
}