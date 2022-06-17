const router = require('express').Router();
const projectModel = require('./model');

router.get('/', (req, res, next) => {
    projectModel.findAll()
    .then(result => res.send(result))
    .catch(next);
})

router.post('/', (req, res, next) => {
    projectModel.insert('test')
    .then(result => res.status(201).send(result))
    .catch(next);
})

module.exports = router;