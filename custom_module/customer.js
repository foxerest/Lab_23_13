class Customer {
    constructor (firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        if (typeof firstName === 'undefined') { this.name = "No first name"; }
        if (typeof secondName === 'undefined') { this.name = "No second name"; }
    }

}

function findCustomer (firstName, secondName, project) {
    for (let id = 0; id < project.customersList.length; id++) {
        let customer = project.customersList[id];
        if (firstName === customer.firstName &&
            secondName === customer.secondName) { return customer; }
    }
    return -1;
}


function addCustomer (firstName, secondName, project) {
    let customer = new Customer(firstName, secondName);
    project.customersList.push(customer);
    return customer;
}


function removeCustomer (firstName, secondName, project) {
    let customer = findCustomer(firstName, secondName, project);
    if (customer === -1) { return -1; }
    let id = project.customersList.indexOf(customer);
    project.customersList.splice(id, 1);
    return 1;
}


function editCustomer (firstName, secondName, project, newFirstName, newSecondName) {
    let customer = findCustomer(firstName, secondName, project);
    if (customer === -1) { return -1; }
    let id = project.customersList.indexOf(customer);
    project.customersList[id].firstName = newFirstName;
    project.customersList[id].secondName = newSecondName;
    return 1;
}


function getCustomersList (project) {
    console.log("\n" + `Customers: ${project.name}:`);
    for (let id = 0; id < project.customersList.length; id++) {
        let customer = project.customersList[id];
        console.log(`\tFirst name: ${customer.firstName}, Second name: ${customer.secondName}`);
    }
    console.log();
    return project.customersList;
}

exports.findCustomer      = findCustomer;
exports.addCustomer       = addCustomer;
exports.removeCustomer    = removeCustomer;
exports.editCustomer      = editCustomer;
exports.getCustomersList = getCustomersList;
