const router = require('express').Router();
const taskModel = require('./model');
const taskMW = require('./middleware');

router.get('/', (req, res, next) => {
    taskModel.findAll()
    .then(tasks => res.send(tasks))
    .catch(next);
})

router.post('/', taskMW.validateTask, (req, res, next) => {
    taskModel.insert(req.body)
    .then(newTask => res.status(201).send(newTask))
    .catch(next);
})

module.exports = router;