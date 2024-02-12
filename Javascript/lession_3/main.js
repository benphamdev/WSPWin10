//I) operator

// 1.arithmetic
// giong het c++ : co them toan tu luy thua ** giong python

var a = 2, b = 3;
var c = a ** b;// giong trong python co them toan tu luy thua
// console.log(a, a++, ++a, c);

// 2.assignment
// giong c++ : co them toan tu luy thua

// prefix & postfix
// a++; // postfix
// --a; // prefix

// var d = a++ + --b;
// console.log(a, d);

// var fullName = "Pham Duy Chien" + " oke ";// giong het c++
// console.log(fullName);

// 3.comparison
// giống hệt c++, python

// if (a < b) {
//     console.log(a);
// }
// else {
//     console.log(b);
// }

// var isSuccess = NaN;

// differece python and c++

// == , != : compare value
// === ,  !== : compare value, data type

var a = 1;
var b = '1';
console.log(a === b);

/**
 * 0
 * false
 * NaN
 * '' or ""
 * undefined
 * null
 */
// if(isSuccess){
//     console.log('oke google');
// }
// else{
//     console.log('dk sai');
// }

var res = 'a' && 'b' && 'c';
if (res) {
    console.log(res);
}
else {
    console.log("NOTot");
}
// 4.logical


// II> data

    // primitive data :

        // Number
        var a = 1;

        // String
        var fullName = 'tb \' oke'; // "tb ' oke";
        // console.log(fullName);

        // Boolean
        var isSuccess = true;

        // undefined
        var ans;

        // null
        var isNull = null; // nothing

        // Symbol

        var id = Symbol('id'); // unique

    // complex data :
    //     function

    //     object type: 
        // + Object : key - value
        var myObject = {
            name : "pham chien",
            address : "thai binh",
            myFunc : function() {

            }
        };

            // + Array
        var arr = [
            'java', 'php'
        ];

        console.log(typeof(arr));