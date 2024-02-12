// Array method

var courses = [
    { id: 1, name: 'c++', coin: 100 },
    { id: 2, name: "python", coin: 200 },
    { id: 3, name: "javascript", coin: 300 },
    { id: 4, name: "java", coin: 0 },
    { id: 5, name: 'c++', coin: 100 },
]

/**
 * 
// forEach
// courses.forEach(function(course, index){
//     console.log(index, course);
// })

// every
var isFree = courses.every(function(course, index){
    return course.coin === 0;
})
console.log(isFree)

// some
var isFree = courses.some(function(course, index){
    return course.coin === 0;
})
console.log(isFree)

// find 

var list = courses.find(function(course, index){
    return course.name === 'c++';
})
console.log(list)

// filter

var list = courses.filter(function(course, index){
    return course.name === 'c++';
})
console.log(list)

* 
 */

/*
var list = courses.map(function(course, index, originArray){
    return {
        id : course.id,
        name : course.name,
        coin : course.coin,
        textCoin : `gia : ${course.coin}`,
        originArray : originArray
    }
})

console.log(list)
*/

/* 
var i = 0;
var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'luot chay : ' : i,
        'bien tich tru : ' : accumulator,
        'gia khoa hoc: ' : currentValue.coin,
        'tich tru duoc: ': total
    });
    return total;
}, 0)

console.log(totalCoin);

*/

// ex1 : flat làm phẳng mảng từ depth array
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(a, items){
//     return a.concat(items);
// }, [])

// console.log(flatArray);

// ex2 : lay ra khoa hocj 
var topics = [
    {
        topic: 'front-end',
        course: [
            { id: 1, title: 'html, css' },
            { id: 2, title: "javascript" }]
    },
    {
        topic: 'back-end',
        course: [
            { id: 1, title: 'python' },
            { id: 2, title: "go" }
        ]
    }
]

var newCourse = topics.reduce(function (res, items) {
    return res.concat(items.course);
}, [])

// console.log(newCourse);

var tagHtml = newCourse.map(function (items) {
    return `
        <div>
            <h2>${items.title}</h2>
            <p>ID : ${items.id}</p>
        </div>
    `
})

// console.log(tagHtml.join(''));

// ex1

// function calculateRating(arr) {
//     var i = 0;
//     return arr.reduce(function (res, items) {
//         if (items.Director == "Christopher Nolan") {
//             res += Number(items.imdbRating); ++i;
//         }
//         return res;
//     }, 0.000) / i;
// }

// ex2
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj(a) {
//     return a.reduce(function (res, items) {
//         var tmp = new Object();
//         tmp[items[0]] = items[1];
//         return Object.assign(res, tmp);
//     }, {})
// }
// function arrToObj(a) {
//     return a.reduce(function (res, items) {
//         res[items[0]] = items[1];
//         return res;
//     }, {})
// }
// function arrToObj(a) {
//     return a.reduce(function (obj, arr) {
//         return { ...obj, [arr[0]]: arr[1] }
//     }, {})
// }


// include methods : chi co array , string

var s = ['java', 'c++', 'go']

console.log(s.includes('java', 2))
