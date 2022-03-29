// Підключаємо необхідні файли
const project = require("./project");
const customer   = require("./customer");
const performer  = require("./performer");


exports.findProject      = project.findProject;
exports.addProject       = project.addProject;
exports.removeProject    = project.removeProject;
exports.editProject      = project.editProject;
exports.getProjectsList = project.getProjectsList;
exports.filterProjectsByPerformer = project.filterProjectsByPerformer;
exports.filterProjectsByCustomer = project.filterProjectsByCustomer;


exports.findCustomer        = customer.findCustomer;
exports.addCustomer         = customer.addCustomer;
exports.removeCustomer      = customer.removeCustomer;
exports.editCustomer        = customer.editCustomer;
exports.getCustomersList   = customer.getCustomersList;


exports.findPerformer       = performer.findPerformer;
exports.addPerformer        = performer.addPerformer;
exports.removePerformer     = performer.removePerformer;
exports.editPerformer       = performer.editPerformer;
exports.getPerformersList  = performer.getPerformersList;
