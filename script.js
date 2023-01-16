/* 
1,John,Doe,25
2,Mary,Smith,23
3,Trevor,Philips,67
1,Test,Test,0 
*/
class Person {
    constructor(id, firstName, lastName, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = +age;
        this.fullName = `${this.firstName} ${this.lastName}`
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.fullName}, Age: ${this.age}`
    }

    createTableRow() {
        const tableRow = document.createElement('tr')
        const idCell = document.createElement('td')
        const firstNameCell = document.createElement('td')
        const lastNameCell = document.createElement('td')
        const ageCell = document.createElement('td')
        this.__appendText(idCell, this.id)
        this.__appendText(firstNameCell, this.firstName)
        this.__appendText(lastNameCell, this.lastName)
        this.__appendText(ageCell, this.age)
        tableRow.appendChild(idCell)
        tableRow.appendChild(firstNameCell)
        tableRow.appendChild(lastNameCell)
        tableRow.appendChild(ageCell)
        return tableRow
    }

    __appendText(element, text) {
        element.appendChild(document.createTextNode(text))
    }

}

const persons = [];
let inputData = prompt('Enter person data separate by ","');

while (inputData) {
    const arr = inputData.split(',');
    if (findPerson(persons, arr[0]) === -1) {
        const person = new Person(arr[0], arr[1], arr[2], arr[3]);
        persons.push(person);
    } else {
        alert(`Person with id: ${arr[0]} exists`);
    }
    inputData = prompt('Enter person data separate by ","');
}
printPersons(persons);
printStats(persons);

function findPerson(persons, id) {
    return persons.findIndex(p => p.id === id);
}

function printPersons(persons) {
    const personsList = document.getElementById('personsList')
    persons.forEach(p => console.log(p.toString()));
    persons.forEach(p => personsList.appendChild(p.createTableRow()));
}

//*
function printStats(persons) {
    if (persons.length) {
        const start = persons[0].age
        const minAge = persons.reduce((res, p) => p.age < res ? p.age : res, start);
        const maxAge = persons.reduce((res, p) => p.age > res ? p.age : res, start);
        const avgAge = persons.reduce((res, p) => p.age + res, 0) / persons.length;
        const stats = `min age = ${minAge}, max age = ${maxAge}, average age = ${Math.round(avgAge * 10) / 10}`
        console.log(stats);
        const personsStats = document.getElementById('personsStats')
        personsStats.appendChild(document.createTextNode(stats))
    } else {
        console.log('No stats');
    }
}

