// const numbers = [2, 4, 6, 8];

// let double = numbers.map(number => number * 2);

// console.log(double);

// var personES5 = {
//     firstname: 'Nick',
//     lastname: 'Doe',
//     sayFullName: function() {
//         return function() {
//             console.log(this.firstname + ' ' + this.lastname);
//         }.bind(this);
//      }
// }

// personES5.sayFullName()();

var personES6 = {
    firstname: 'Nick',
    lastname: 'Doe',
    sayFullName: function() {
        return () => {
            console.log(`${this.firstname} ${this.lastname}`);
        };
     }
}

personES6.sayFullName()();

document.querySelector('h1').addEventListener('click', function() {
    console.log(this);

    let a = () => {
        this.style.color = 'red';
    }
    a();
});