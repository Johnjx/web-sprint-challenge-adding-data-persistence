async function findAll(){
    return Promise.resolve([{ message: 'resource model' }]);
}

async function insert(body){
    return Promise.resolve({ message: `resource model new insert ${body}` });
}

module.exports = {
    findAll,
    insert
}
