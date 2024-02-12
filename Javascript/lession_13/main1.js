// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// thư viện : output luôn luôn là 1 promise  

// var promise = new Promise(function (resolve, reject) {
//     // Logic 
//     // resolve('success!');
//     reject('Error!')
// })

// var promise = Promise.resolve('success')
// var promise = Promise.reject('error')

// promise
//     .then(function (result) {
//         console.log('result : ', result);
//     })
//     .catch(function (err) {
//         console.log('error : ', err);
//     })


var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        return resolve([1]);
    }, 1000);
});

var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        return resolve([2, 3]);
    }, 3000);
});

var promise3 = Promise.reject('co loi !');

Promise.all([promise1, promise2, promise3])
    .then(function ([res, res1]) {
        console.log(res.concat(res1))
    })
    .catch(function (err) {
        console.log(err);
    });