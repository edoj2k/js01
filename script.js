let numbers = [100, 200, 300];

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

console.log('-----------');

let total = numbers.reduce(function(previous, number) {
    return previous + number;
}, 0);

console.log(total);

console.log('----------');

let weeklyEarnings = [750, 642, 823, 1456];

let income = weeklyEarnings.reduce(function(previous, weeklyEarnings) {
    return previous + weeklyEarnings;
}, 5000);


console.log(income);

console.log('-------------');

let firstnames = ['John', 'Jane', 'Mary'];

let lastnames = ['smith', 'brown', 'doe'];

let fullnames = firstnames.reduce(function(previous, firstnames, index) {
    previous.push(firstnames + ' ' + lastnames[index]);
    return previous;
}, []);

console.log(fullnames);