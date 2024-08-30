let numbers = [1, 2, 3, 4, 5];

let newArr = [];

for(let i = 0; i< numbers.length; i++) {
    newArr.push(numbers[i] * 10);
}

console.log(numbers);
console.log(newArr);

console.log('--------------');

let mapArr = numbers.map(function(number) {
    return number * 10;
});

console.log(numbers);
console.log(mapArr);

console.log('-----------');

let persons = [
    {firstname: 'John', lastname: 'Smith'},
    {firstname: 'Bob', lastname: 'Brown'},
    {firstname: 'Nick', lastname: 'Doe'},
]

let getFirstNames = persons.map(function(person) {
    return person.firstname;
});

console.log(persons);
console.log(getFirstNames);