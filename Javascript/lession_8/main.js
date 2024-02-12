
var emailKey = "email";

var myInfor = {
    name: 'pham duy chien',
    address: 'thai binh',
    age: 20,
    1: 2,
    [emailKey]: "duychien",
    getName: function () {
        return this.name;
    }
}

// function : Method
// others : property
// access value

// using dot notation
// myInfor.email = "phamchien152003";
// using backet notation
// myInfor["email"] = "phamchien252003";
// myInfor[1];// myInfor["1"]
// can not use myInfor.1 => error

// var myKey = 'address';
// console.log(myInfor[myKey]);

delete myInfor.age;
console.log(myInfor.getName());

export { default as user2 } from './main1.js';

// import user from './main1.js';
// export default user;