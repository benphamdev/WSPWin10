// 1. input / select
// 2. key up / down

var inputElement = document.querySelector("input[type = 'text']");

// inputElement.oninput = function (e) {
//     console.log(e.target.value);
// }

// var inputElement = document.querySelector("input[type = 'checkbox']");

// inputElement.onchange = function (e) {
//     console.log(e.target.checked);
// }

// var inputElement = document.querySelector("select");

// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }

// inputElement.onkeyup = function (e) {
//     console.log(e.which);

//     switch (e.which) {
//         case 27:
//             console.log('exit');
//             break;
//     }
// }

document.onkeyup = function (e) {
    switch (e.which) {
        case 27:
            console.log('exit');
            break;
    }
}