let persons = [
    {name: 'John', age: 28},
    {name: 'Mary', age: 10},
    {name: 'Nick', age: 25},
    {name: 'Jane', age: 40},
];

let everyPersonCanVote = true;

let onlySomePersonsCanVote = false;

for(let i = 0; i < persons.length; i++) {
    if(persons[i].age < 18) {
        everyPersonCanVote = false;
        onlySomePersonsCanVote = true;
    }
}

console.log('Every person can vote - ' + everyPersonCanVote);

console.log('Only some persons can vote - ' + onlySomePersonsCanVote);

let x = 0;

// let every = persons.every(function(person) {
//     console.log(++x + ' - ' + (person.age >= 18));
//     return person.age >= 18;
// });

// console.log(every);

let some = persons.some(function(person) {
    console.log(++x + ' - ' + (person.age <= 18));
    return person.age <= 18;
});

console.log(some);