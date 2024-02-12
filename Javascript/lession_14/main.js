// 1. Let, const

// 1. var / let, const : scope, hosting
// 2. const/ var, let : assignment

// code block: if else, loop, {}, ..

// if (true) {
//     var course = 'c++';
// }

// a = 1;
// var a;

// console.log(a);

// var a = {
//     name: "c++"
// }
// a.name = "JAVA";
// console.log(a.name);


// 2 template literals
// 3. multi-line String

const courseName = 'c++',
    description = `Course name : ${courseName} \${}`;
// console.log(description);

const line = 'line1\n'
    + 'line2\n'
    + 'line3\n'
    + 'line4\n';

const tmp = `line1
line2
line3`
// console.log(tmp);
// console.log(line);


// 4. arrow function

// const sum = (a, b) => ({ a: a, b: b });

// console.log(sum(2, 2));

const logger = log => console.log(log);

// logger('Hello');

const course = {
    name: 'c++',
    getName: function () {
        return this.name;// context : arrow function not implemented
    }
}
// console.log(course.getName());

// constructor function not implemented arrow function
const test = function (name, time) {
    this.name = name;
    this.time = time;
}
const test1 = new test('hello', 100);
// console.log(test1);


// 5. classes

class testClass {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
    getName() {
        return this.name;
    }
}


// 6. default parameter values

function logger1(log, type = 'log') {
    console[type](log);
}

// logger1('log', 'error');


// 7. enhanced object literals

// 1. define key: value for object
// 2. define method for object
// 3. define key for object with variable

var name = 'c++',
    price = 1000;

var course1 = {
    // name: name,
    // price: price
    name,
    price,
    getName() {
        return name;
    }
}

// console.log(course1.getName());

let fieldName = 'name',
    fieldPrice = 'price'

const course2 = {
    [fieldName]: 'c++',
    [fieldPrice]: 1000
}

// console.log(course2);



export default logger1;

export const tmp1 = "log", tmp2 = "error", tmp3 = "warn"