//1. Object contructor

function user(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new user("pham", "duy", "ava");
// author.title = "oke gg";

// 2. Object prototype

// user.prototype.className = "F8";
// user.prototype.getClass = function (){
//     return this.className;
// }
// console.log(author.getClass());

console.log(author.getName());

// 3. date object

var date = new Date();
// console.log(date.getFullYear(), date.getMonth() + 1);

// 4. math Object

// Math.PI
// console.log(Math.PI);
// Math.round()
// console.log(Math.round(2.9));
// Math.abs();
// Math.ceil();
// Math.floor();
// Math.random();
console.log(Math.floor(Math.random() * 4));
// Math.max();
console.log(Math.min(1, 2, 3));
// Math.min();

export default user;