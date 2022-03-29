const {findPerformer} = require("./performer");
const {findCustomer} = require("./customer");

class Project {
    constructor (name, description) {
        this.name = name;
        this.description = description;
        this.customersList = [];
        this.performersList = [];
        if (typeof name === 'undefined')    { this.name = "Project without name"; }
        if (typeof description === 'undefined') { this.address = "Project without description"; }
    }
    
}

let projectsList = [];

function findProject (name, description) {
    for (let project of projectsList) {
        if (name === project.name &&
            description === project.description) { return project; }

    }
    return -1;
}

function addProject (name, description) {
    let project = new Project(name, description);
    projectsList.push(project);
    return project;
}

function removeProject (name, description) {
    for (let id = 0; id < projectsList.length; id++) {
        let project = projectsList[id];
        if (project.name === name &&
            project.description === description) { projectsList.splice(id, 1);
            return 1; }
    }
    return -1;
}

function editProject (name, description, newName, newDescription) {
    for (let id = 0; id < projectsList.length; id++) {
        let project = projectsList[id];
        if (project.name === name &&
            project.description === description) {
            projectsList[id].name = newName;
            projectsList[id].address = newDescription;
            return 1;
        }
    }
    return -1;
}

function getProjectsList() {
    console.log("\n" + "Projects:");
    for (let id = 0; id < projectsList.length; id++) {
        let pro = projectsList[id];
        console.log(`Project name: ${pro.name}, Project description: ${pro.description}`);
    }
    console.log();
    return projectsList;
}

function filterProjectsByPerformer(firstName, secondName) {
    let flag = true;
    console.log("\n" + `Projects with performer ${firstName} ${secondName}:`);
    for (let project of projectsList){
        if (findPerformer(firstName, secondName, project) !== -1) {
            console.log(`${project.name}`);
            if (flag) flag = false;
        }
    }
    if (flag) console.log(`No projects`);
    console.log();
}

function filterProjectsByCustomer(firstName, secondName) {
    let flag = true;
    console.log("\n" + `Projects with customer ${firstName} ${secondName}:`);
    for (let project of projectsList){
        if (findCustomer(firstName, secondName, project) !== -1) {
            console.log(`${project.name}`);
            if (flag) flag = false;
        }
    }
    if (flag) console.log(`No projects`);
    console.log();
}

exports.findProject = findProject;
exports.addProject = addProject;
exports.removeProject = removeProject;
exports.editProject = editProject;
exports.getProjectsList = getProjectsList;
exports.filterProjectsByPerformer = filterProjectsByPerformer;
exports.filterProjectsByCustomer = filterProjectsByCustomer;
