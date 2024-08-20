// Lecture: Get And Manipulate On Individual Elements - Part 1

/*
console.log(document.getElementById('list'));

var el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// var el = document.getElementById('LIST');
// console.log(el);

console.log(el.textContent);
console.log(el.textContent = 'Hello');

var heading = document.getElementById('heading').textContent;
console.log(heading);

var ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);

console.log(el.innerHTML);
console.log(el.innerHTML = 'Hello');
console.log(el.innerHTML = '<h1>Hello</h1>');
console.log(el.textContent = '<h1>Hello</h1>');
*/

// let lis = document.querySelectorAll('li, h2, #hide-list');

// console.log(lis);

// Array.from(lis).forEach(function(li) {
//     li.textContent = 'hello world';
// })

let h2 = document.querySelector('header h2');

h2.className = 'changeBg';

h2.classList.add('changeFt');

// h2.classList.remove('changeBg');

h2.classList.toggle('changeBg');

console.log(h2.classList);