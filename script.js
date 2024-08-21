let person1 = {};
person1.firstname = 'John';
person1.lastname = 'Smith';

let person2 = {};
person2.firstname = 'Nick';
person2.lastname = 'Doe';

// function createPerson(firstname, lastname) {
//     let newPerson = {};
//     newPerson.firstname = firstname;
//     newPerson.lastname = lastname;
//     return newPerson
// }

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

let person3 = new Person('Bob', 'Brown');
let person4 = new Person('Marry', 'James');

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

let strObj = new String('hello');
console.log(strObj);
console.log(typeof strObj);