const db = require('../data/db-config.js');

function find() {
    return db('projects')
}

function add(projectData) {
    return db('projects').insert(projectData)
}

function findResources() {
    return db('resources')
}

function addResource(resourceData) {
    return db('resources').insert(resourceData)
}

function findTasks() {
    return db('tasks')
    .join("projects", "projects.id", "tasks.project_id")
    .select('tasks.project_id',"tasks.id","tasks.description", "tasks.notes", 
    "tasks.completed", "projects.project_name", "projects.description")
}


function addTask(taskData) {
    return db('tasks').insert(taskData)
}

module.exports = {
    find,
    add,
    findResources,
    addResource,
    findTasks,
    addTask
};