let firstProto = {
    sayHello: function() {
        return 'hello ' + this.name;
    }
}

let john = Object.create(firstProto, {
    name: {
        value: 'John'
    }
});

console.log(john);

let secondProto = Object.create(firstProto, {
    sayHi: {
        value: function() {
            return 'Hi ' + this.name;
        }
    }
})

console.log(secondProto);

let bob = Object.create(secondProto, {
    name: {
        value: 'Bob'
    }
});

console.log(bob);

let obj = Object.create(null);

console.log(obj);