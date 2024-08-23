(function(name) {
    console.log('hello ' + name);
}('john'));

let a = function() {
    console.log('hi');
    return 'hello';
}();

console.log(a);