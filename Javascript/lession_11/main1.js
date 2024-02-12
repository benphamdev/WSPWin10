// 1.filter

var courses = [
    {
        name: 'C++',
        coin: 200,
        isFinish: true
    },
    {
        name: 'python',
        coin: 400,
        isFinish: false
    },
    {
        name: 'javascript',
        coin: 100,
        isFinish: false
    },
    {
        name: 'java',
        coin: 500,
        isFinish: false
    },
    {
        name: 'C#',
        coin: 250,
        isFinish: false
    }
]

Array.prototype.myFilter = function (cb) {
    var ans = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var tmp = cb(this[index], index, this);
            if (tmp)
                ans.push(this[index]);
        }
    }
    return ans;
}

// var ans = courses.filter(function (course, index, arr) {
//     return course.coin > 100;
// })
// var ans = courses.myFilter(function (course, index, arr) {
//     return course.coin > 100;
// })


// 2.some : return true / false

// var ans = courses.some(function (course, index, arr) {
//     return course.isFinish == true;
// })
Array.prototype.mySome = function (cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this))
                return true;
        }
    }
    return false;
}
// var ans = courses.mySome(function (course, index, arr) {
//     return course.isFinish;
// })

// 3.every

Array.prototype.myEvery = function (cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!cb(this[index], index, this))
                return false;
        }
    }
    return true;
}

var ans = courses.myEvery(function (course, index, arr) {
    return course.isFinish;
})
console.log(ans);

