const router = require('express').Router();
const taskModel = require('./model');

router.get('/', (req, res, next) => {
    taskModel.findAll()
    .then(result => res.send(result))
    .catch(next);
})

router.post('/', (req, res, next) => {
    taskModel.insert(req.body)
    .then(newTask => res.status(201).send(newTask))
    .catch(next);
})

module.exports = router;