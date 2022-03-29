class Performer {
    constructor (firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        if (typeof firstName === 'undefined') { this.name = "No first name"; }
        if (typeof secondName === 'undefined') { this.name = "No second name"; }
    }
}

function findPerformer (firstName, secondName, project) {
    for (let id = 0; id < project.performersList.length; id++) {
        let performer = project.performersList[id];
        if (firstName === performer.firstName &&
            secondName === performer.secondName) { return performer; }
    }
    return -1;
}

function addPerformer (firstName, secondName, project) {
    let performer = new Performer(firstName, secondName);
    project.performersList.push(performer);
    return performer;

}


function removePerformer (firstName, secondName, project) {
    let performer = findPerformer(firstName, secondName, project);
    if (performer === -1) { return -1; }
    let id = project.performersList.indexOf(performer);
    project.performersList.splice(id, 1);
    return 1;
}


function editPerformer (firstName, secondName, project, newFirstName, newSecondName) {
    let performer = findPerformer(firstName, secondName, project);
    if (performer === -1) { return -1; }
    let id = project.performersList.indexOf(performer);
    project.performersList[id].firstName = newFirstName;
    project.performersList[id].secondName = newSecondName;
    return 1;
}

function getPerformersList (project) {
    console.log("\n" + `Performers: ${project.name}:`);
    for (let id = 0; id < project.performersList.length; id++) {
        let performer = project.performersList[id];
        console.log(`\tFirst name: ${performer.firstName}, Second name: ${performer.secondName}`);
    }
    console.log();
    return project.performersList;
}

exports.findPerformer      = findPerformer;
exports.addPerformer       = addPerformer;
exports.removePerformer    = removePerformer;
exports.editPerformer      = editPerformer;
exports.getPerformersList = getPerformersList;
