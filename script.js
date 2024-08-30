let persons = [
    {name: 'Mary', gender: 'female'},
    {name: 'John', gender: 'male'},
    {name: 'Jane', gender: 'female'},
    {name: 'Bob', gender: 'male'},
];

let males = [];

for(let i = 0; i < persons.length; i++) {
    if(persons[i].gender == 'male') {
        males.push(persons[i]);
    }
}

console.log(persons);
console.log(males);

console.log('----------');

let females = persons.filter(function(person) {
    return person.gender == 'female';
})

// let females = persons.find(function(person) {
//     return person.gender == 'female';
// })

console.log(persons);
console.log(females);