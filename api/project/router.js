const router = require('express').Router();
const projectModel = require('./model');
const projMW = require('./middleware');

router.get('/', (req, res, next) => {
    projectModel.findAll()
    .then(projects => res.send(projects))
    .catch(next);
})

router.post('/', projMW.validateProjName, (req, res, next) => {
    projectModel.insert(req.body)
    .then(newProject => res.status(201).send(newProject))
    .catch(next);
})

module.exports = router;