function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // this.getFullName = function() {
    //     return this.firstname + ' ' + this.lastname;
    // }
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

Person.prototype.greet = 'Hello from greet';

let person1 = new Person('John', 'Smith');
person1.greet = 'hello from person1 object';

let person2 = new Person('Nick', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());