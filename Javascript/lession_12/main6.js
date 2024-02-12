// 1. preventDefault
// 2. stopPropagation

// var aElements = document.anchors; co attribute name
// var aElements = document.links; //ko can

// for (var i = 0; i < aElements.length; i++) {
//     aElements[i].onclick = function (e) {
//         if (!e.target.href.startsWith("http://f8.edu.vn")) {
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function (e) {
//     e.preventDefault();
// }
// ulElement.onclick = function (e) {
//     console.log(e.target);
// };


document.querySelector('div').onclick = function (e) {
    console.log('DIV');
}

document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('click me!');
}
