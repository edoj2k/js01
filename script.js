// const arr = [10, 20, 30, 40, 50, 60];

// const [ten, twenty, ...items] = arr;

// console.log(ten,twenty, ...items);

const person = {
    firstname: 'John', 
    lastname: 'Smith',
    age: 30
}

// const {firstname, lastname} = person;

// console.log(firstname,lastname);

const aboutMe = ({firstname, lastname, age}) => {
    console.log(`I am ${firstname} ${lastname} and I am ${age} years old.`);
}

aboutMe(person);