// innerHTML, outerHTML

var boxElement = document.querySelector('.box');
boxElement.innerHTML = "<h1>Heading</h1>";

// console.log(boxElement.innerHTML);
// console.log(document.querySelector('h1').innerText);

// console.log([boxElement]);



// bai 148  : DOM Style 

// console.log(boxElement.style);

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.style, {
//     width: '100px',
//     height: '200px',
//     backgroundColor: 'red'
// });


// bai 150 : ClassList Property thuoc tinh cua element Node

// add
// contains
// remove
// toggle

boxElement.classList.add('red', 'blue');
// console.log(boxElement.classList.contains('red'));

// setTimeout(() => {
//     boxElement.classList.remove('red');
// }, 3000);

setInterval(() => {
    boxElement.classList.toggle('red');
}, 300);