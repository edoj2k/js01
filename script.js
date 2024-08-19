let firstname = 'Bob'

let per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function() {
        let that = this;
        console.log(this === per);
        console.log(this.firstname + ' ' + this.lastname);
``
        function greet() {
            console.log('Hi ' + that.firstname);
        }
        greet();
    }
}

let per1 = {
    firstname: 'Nick',
    lastname: 'Doe'
}

per1.getFullname = per.getFullname;

per.getFullname();
per1.getFullname();