const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();


// Working
router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
            })
        .catch(err => {
            res.status(500).json({ message: 'failed to get projects', err});
        });
});


// Working
router.post('/', (req,res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post project', err})

        })
});


// Working 
router.get('/resources', (req,res) => {
    Projects.findResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message:'Failed to get resources', err})
        })
});


// Working
router.post('/resources', (req,res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post resource', err})
        })
});


// Working
router.get('/tasks', (req,res) => {
    Projects.findTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message:'Failed to get tasks', err})
        })
});


// Working
router.post('/tasks', (req,res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post task', err})
        })
});


module.exports = router;