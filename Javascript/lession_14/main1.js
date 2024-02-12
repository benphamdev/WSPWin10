// 8. destructuring
// 9. rest parameters

let list = ['c++', 'php', 'javascript'];
// var [a, b, c] = list;
let [a, ...rest] = list;
// console.log(a, rest);

let course = {
    name: 'c++',
    price: 1000,
    child: {
        name: 'javascript'
    }
}

// var { name: parentName, child: { name } } = course;

// console.log(parentName);
// console.log(name);

let { name, description = 'default description' } = course;
// console.log(description);

function logger(a, b, ...params) {
    // console.log(params);
}

// logger(1, 2, 3, 4);

function logger1({ name, description }) {
    // console.log(name, description);
}

logger1({ name: 'java', description: 'okemon' });


// 10. spread

var array = ['c++', 'java', 'python'];
var array2 = ['cpp', 'javascript'];
var array3 = [...array, ...array2];

// console.log(array3);

let object = { name: 'java' }
let object2 = { price: 1000 };
let object3 = {
    ...object,
    ...object2
}

// console.log(object3);

var arr = ['java', 'python', 'javascript']

function solve(...rest) {// rest operator
    for (var i = 0; i < rest.length; i++) {
        // console.log(rest[i]);
    }
}

solve(...arr); // spread array


// 11. tagged template literal

function hightlight([first, ...arr], ...rest) {
    return rest.reduce(
        (accumulator, currentValue) => [...accumulator, `<span>${currentValue}</span>`, arr.shift()], [first]
    ).join('');
}

let brand = 'F8',
    course1 = 'java'

let html = hightlight`learn programming ${course1} from ${brand}`;

// console.log(html);

// 12. Modules : import / export

// import logger2 from "./main.js";
// import logger2 {tmp1, tmp2, tmp3}from "./main.js";
// import {tmp1, tmp2, tmp3} from "./main.js"; 
// import * as constants from "./main.js";
// logger2('oke', constants[0]);

// import user from '../lession_8/main.js';
import { user2 } from '../lession_8/main.js';
var author = new user2(
    'John',
    'Doe',
    1000
);
console.log(author.getName());

