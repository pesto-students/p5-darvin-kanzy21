//------------------ As per ES16  --------------------//
class Person {
    constructor(name) {
        this.name = name;
    }
    printInfo() {
        console.log(this.name + ' is now teaching ' + this.subject);
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const obj = new Teacher('shreyas', 'maths');
obj.printInfo();

//------------------ As per ES15--------------------//
/*

function Person(name) {
    this.name = name;
}

Person.prototype.printInfo = function () {
    console.log(this.name+' is now teaching '+ this.subject)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

function Teacher(name, subject) {
    Person.call(this, name); // acts as a super()
    this.subject = subject
}

const obj = new Teacher('shreyas','maths');
obj.printInfo();

*/