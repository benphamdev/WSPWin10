// number type

// Number.isFinite();
// check value luon
// isFinite
// -> chuyen thanh so roi moi kiem Tra
// Number.isInteger();
// Number.parseFloat();
// Number.parseInt();
// Number.prototype.toFixed();
// Number.prototype.toString();



// lam viec voi arrays

var arr = new Array(
    'c++', 
    'python', 
    'javascript'
);

// toString
// console.log(arr.toString());

// join
// console.log(arr.join(' - '));

// Pop
// arr.pop();// xoa cuoi

// Push
// arr.push('java', 'c'); // them vao cuoi

// shift
// arr.shift(); // xoa dau

// unshift
// arr.unshift('oke'); // them dau

// splicing : 
// arr.splice(1, 1) // xoa 1 phan tu
// arr.splice(1, 0, 'oke') // chen
// arr.splice(1, 1, 'xoa xong chen');
// concat

var arr2 = [
    'ruby',
    'go'
]

// arr.concat(arr2);// ko taam chieu 

// slicing

// arr.slice(1, 2);
console.log(arr.slice(-1));

// console.log(arr);
// console.log(arr.length);