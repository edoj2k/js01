// function calc(num1) {
//     let num2  = 10;
    
//     return function(num3) {
//         let sum = num1 + num2 + num3;
//         console.log(sum);
//     }
// }

// let add = calc(5);

// console.log(add);
// add(15);

function a() {
    let arr = [];
    for(let i = 0; i < 3; i++) {
        arr.push((function() {
            console.log(i);
        })());
    }
    return arr;
}

a();
