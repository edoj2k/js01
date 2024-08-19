let person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27, 
    daughter: {
        name: 'Mary',
        age: 5
    },
    myFunc: function(par) {
        console.log(par.daughterName + ' is a daughter of ' + par.fatherName + ' and she is ' + par.daughterAge + ' years old');
    }
};

console.log(person);
console.log(person.daughter.name);

// person.myFunc(person.daughter.name, person.firstname, person.daughter.age);
person.myFunc({
    daughterName: 'Jessy',
    fatherName: 'Michael',
    daughterAge: 5
})