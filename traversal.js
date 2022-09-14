// DOM Manipulation

// Traverse the DOM

// Parent Node Traversal ================

/*
let ul = document.querySelector('ul');


//console.log(ul.parentNode.parentNode.parentNode.parentNode.pa); // can be used many times 
//console.log(ul.parentElement);

const html = document.documentElement;
console.log(html.parentNode); // returns HTML Document (better use most of the time)
console.log(html.parentElement); // returns null
*/

// Child Node Traversal ==================
// let ul = document.querySelector('ul');

/*
console.log(ul.childNodes); //includes text nodes - returns all children of element
console.log(ul.firstChild); 
console.log(ul.lastChild);
*/

// ul.childNodes[1].style.backgroundColor = "blue"; // must specify the position becuase you may not be targetting the element, but the text instead

// console.log(ul.children); // returns elements only
// console.log(ul.firstElementChild); // returns first child element
// console.log(ul.lastElementChild); // reutrns last child element

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);