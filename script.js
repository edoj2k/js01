let person = {
    firstname: 'John',
    lastname: 'Smith',
    fullname: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

let nick = {
    firstname: 'Nick',
    lastname: 'Doe'
};

console.log(person.fullname.call(nick));

let definePerson = function(age, job) {
    console.log(this.fullname() + ' is ' + age + ' years old and he is a ' + job);
};

definePerson.call(person, 28, 'developer');
definePerson.apply(person, [30, 'designer']);

let getPerson = definePerson.bind(person, 19);
getPerson('student');
getPerson('driver');
