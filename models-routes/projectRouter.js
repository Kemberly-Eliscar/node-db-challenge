const express = require('express')

const Projects = require('./projectModel');

const router = express.Router({
    mergeParams: true,
});

// this router end-point retrieves a list (array) of projects
router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({
            error: `Unable to fetch projects ${error.message}`
        })
    })
});

// this route end-point adds a project to the projects list.
router.post('/', (req, res) => {
    Projects.add(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({
            error: `Unable to add project ${error.message}`
        })
    })
});

module.exports = router;