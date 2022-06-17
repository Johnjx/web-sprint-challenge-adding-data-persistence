const db = require('../../data/dbConfig');

async function findAll(){
    return Promise.resolve([{ message: 'task model' }]);
}

function insert(task){
   return db('tasks')
    .insert(task)
    .then(([task_id]) => db('tasks').where({ task_id }))
        .then(newTask => 
            newTask.map(task => ({
                ...task,
                task_completed: task.task_completed ? true : false
            }))[0]    
        )
        .catch(err => err)
}

module.exports = {
    findAll,
    insert
}