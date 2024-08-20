// let div = document.querySelector('div.wrapper');
// let header = document.querySelector('header');
// let h2 = document.querySelector('header h2');

// div.addEventListener('click', function(){
//     let delay = new Date().getTime() + 1000;
//     while(new Date() < delay) {}
//     console.log('From div');
// }, true);

// header.addEventListener('click', function(){
//     let delay = new Date().getTime() + 1000;
//     while(new Date() < delay) {}
//     console.log('From header');
// }, true);

// h2.addEventListener('click', function(){
//     let delay = new Date().getTime() + 1000;
//     while(new Date() < delay) {}
//     console.log('From h2');
// }, true);

let h2 = document.querySelector('header h2');

h2.addEventListener('click', function() {
    console.log('From click event');
});

function a() {
    let delay = new Date().getTime() + 3000;
    while(new Date() < delay) {}
    console.log('From function a');
}
a();