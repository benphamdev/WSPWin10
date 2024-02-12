// if else 
/**
 * var date = 2;
switch (date) {
    case 2 :
        console.log('hom nay la thu 2');
        break;
    case 3 :
        console.log('hom nay la thu 3');
        break;
    case 4 :
        console.log('hom nay la thu 4');
        break;
    case 5 :
        console.log('hom nay la thu 5');
        break;
}

// ternary operator : giong c++
 */



// loop in javascript : giống c++

// Làm bài
function getRandNumbers(min, max, length) {
    var a = [];
    for (var i = 1; i <= length; i++) {
        a.push(Math.random() * (max - min) + min);
    }
    return a;
}

// console.log(getRandNumbers(1, 2, 3));

var myInfor = {
    name: "pham duy chien",
    address: "thai binh",
    age: 20,
    1: 2
}

// var arr = [1, 2, 3]

// for (var key in myInfor){
//     console.log("Thuộc tính", key, "có giá trị", myInfor[key]);
// }
// for (var value of arr){
//     console.log(value);
// }
// for (var value of Object.values(myInfor)){
//     console.log(value);
// }

// var i = 0; 
// while (i < 1000){
//     console.log(i);
//     i++;
// }
// ['a', 'b', 'c', 'a', 'b', 'c']
var arr = prompt('nhap list : ');
let cnt = new Array(256); for (let i = 0; i < 256; i++) cnt[i] = 0;
for (x of arr) {
    if (cnt[x.charCodeAt(0)] == 0 && x != ' ') {
        console.log(x);
        cnt[x.charCodeAt(0)] = 1;
    }
}
