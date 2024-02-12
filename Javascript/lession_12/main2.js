// DOM attributes

var headingElement = document.querySelector('h2');

headingElement.className = 'heading2';//cach 1 : seter
headingElement.setAttribute('href', 'link')// cach2 : method

var headingEle = document.querySelector('.heading');

// console.log(headingElement);
// console.log(headingEle.getAttribute('class'))
// console.log(headingElement.getAttribute('href'))

// innerText vs textContent property 

headingEle.innerText = 'newHeading';
// console.log(headingEle.innerText);
// console.log(headingEle.textContent);

// headingEle.innerText = '<i>newHeading</i>';

