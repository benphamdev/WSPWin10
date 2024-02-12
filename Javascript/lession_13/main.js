// bai 161 : JSON

// 1. JSON: là định dạng dữ liệu(chuỗi)
// 2. javascript object notation
// 3. JSON : Number, string, Boolean, null, Array, Object

// mã hóa / giải mã
// encode / decode
// stringify : tu js -> json / parse : json -> js

// var json = '["javascipt", "c++"]';
// var json = '{"name" : "chien pham", "age" : 20}';

// var n = '1';

// console.log(JSON.parse(json));

// console.log(JSON.stringify({
//     name: 'pham chien',
//     age: 21,
//     test: function () { }
// }))

// bai 166 : Promise

// - sync
// - async
// - nỗi đau
// - lý thuyết , cách hoạt động
// - thực hành , ví dụ

// setTimeout, setInterval, fetch, XMLHttpRequest, đọc file, requestAnimationFrame
// call back

// call back hell
// pyramid of doom 


// 1. pending
// -> memory leak
// 2.fullfilled
// 3. rejected
var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // resolve();
        // reject();

        // Fake call API 

        // resolve([
        //     {
        //         id: 1,
        //         name: "Javscipt"
        //     }
        // ])

        // reject('co loi !');
    }
);

// promise
//     .then(function () {
//         console.log("success");
//     })
//     .catch(function () {
//         console.log("failure");
//     })
//     .finally(function () {
//         console.log("done");
//     })


// promise
//     .then(function (course) {
//         console.log(course);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log("done");
//     })



// bai 172 : promise chain 

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, 1000);
    });
}

sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2);
        return sleep(1000);
    })
    .then(function () {
        console.log(3);
        return sleep(1000);
    })




