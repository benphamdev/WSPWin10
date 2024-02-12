// function myFuntion(param) {
//     if (typeof param === 'function') {
//         param('hoc lap trinh');
//     }
// }

// function myCallBack(value) {
//     console.log('value : ', value);
// }

// myFuntion(myCallBack)

var courses = ["java", "c++", "javascript", "python", "go", "c#"];
// var htmls = courses.map2(function(course, index){
//     console.log(index, course);
//     return `<h2>${course}<\h2>`;
// })
// var htmls = courses.map(function(course){
//     return `<h2>${course}<\h2>`;
// })
// console.log(htmls.join(''))
// map2
Array.prototype.map2 = function (callBack) {
    var ans = [],
        n = this.length;
    for (var i = 0; i < n; i++) {
        var result = callBack(this[i], i);
        console.log("result : ", result);
        ans.push(result);
    }
    return ans;
};

// on lai :
// Object prototype
// for in
// hasOwnProperty

// forEach2
Array.prototype.forEach2 = function (callBack) {
    for (var index in this) {
        if (this.hasOwnProperty(index))
            callBack(this[index], index, this);
    }
};

var arr = new Array(10);
// courses.forEach(function(course, index arr){
//     console.log(course, index, arr);
// })

courses.forEach2(function (course, index, list) {
    console.log(course, index, list);
});
