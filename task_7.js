const mod = require('./custom_module');

// Projects
let p1 = mod.addProject("Project1", "bla bla bla");
let p2 = mod.addProject("Project2", "something about project");
let p3 = mod.addProject("Project3", "short description");

mod.getProjectsList();

console.log("Removing of project: Project2");
mod.removeProject("Project2", "something about project");

mod.getProjectsList();

console.log("Edit project name: Project3");
mod.editProject("Project3", "short description", "New Project3", "New short description");

mod.getProjectsList();

let project1 = mod.findProject("Project1", "bla bla bla");
console.log(`Searching for Project1: ${project1 !== -1 ? "true" : "false"}`);
let project2 = mod.findProject("False Project", "false description");
console.log(`Searching for Project_7: ${project2 !== -1 ? "true" : "false"}`);

// Customers
mod.addCustomer("Taras", "Kulian", p1);
mod.addCustomer("Name1", "Name2", p1);
mod.addCustomer("Stepan", "Bandera", p1);

mod.getCustomersList(p1);

console.log("Removing of customer: Name1 Name2");
mod.removeCustomer("Name1", "Name2", p1);

mod.getCustomersList(p1);

console.log("Editing of customer: Stepan Bandera");
mod.editCustomer("Stepan", "Bandera", p1, "New Stepan", "New Bandera");

mod.getCustomersList(p1);

let customer1 = mod.findCustomer("Taras", "Kulian", p1);
console.log(`Searching for customer Taras Kulian: ${customer1 !== -1 ? "true" : "false"}`);
let customer2 = mod.findCustomer("Taras", "Shevchenko", p1);
console.log(`Searching for customer Taras Shevchenko: ${customer2 !== -1 ? "true" : "false"}`);

// Performers

mod.addPerformer("Worker", "First", p1);
mod.addPerformer("Worker", "Taras", p1);
mod.addPerformer("Bad Worker", "Second", p1);

mod.getPerformersList(p1);

console.log("Removing performer: Bad Worker Second");
mod.removePerformer("Bad Worker", "Second", p1);

mod.getPerformersList(p1);

console.log("Editing of performer: Worker First");
mod.editPerformer("Worker", "First", p1, "First", "Worker");

mod.getPerformersList(p1);

let performer1 = mod.findPerformer("Worker", "Taras", p1);
console.log(`Searching for performer Worker Taras: ${performer1 !== -1 ? "true" : "false"}`);
let performer2 = mod.findPerformer("О. Біда", 32, p1);
console.log(`Searching for performer Worker Nazar: ${performer2 !== -1 ? "true" : "false"}`);

mod.filterProjectsByCustomer("Taras", "Kulian");
mod.filterProjectsByPerformer("Worker", "Taras");
