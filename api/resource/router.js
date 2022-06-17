const router = require('express').Router();
const resourceModel = require('./model');

router.get('/', (req, res, next) => {
    resourceModel.findAll()
    .then(resources => res.send(resources))
    .catch(next);
})

router.post('/', (req, res, next) => {
    resourceModel.insert('test')
    .then(result => res.status(201).send(result))
    .catch(next);
})

module.exports = router;
