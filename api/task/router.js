const router = require('express').Router();
const taskModel = require('./model');

router.get('/', (req, res, next) => {
    taskModel.findAll()
    .then(result => res.send(result))
    .catch(next);
})

router.post('/', (req, res, next) => {
    taskModel.insert('test')
    .then(result => res.status(201).send(result))
    .catch(next);
})

module.exports = router;