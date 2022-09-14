
// DOM Manipulation
/*
Notes:
- Always use camelcase in JS


*/

/*
// Accessing the DOM

// GetElementById()
const title = document.getElementById('main-heading');

console.log(title);

// GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');

console.log(listItem)

// getElementsByTagName() 
const listItems = document.getElementsByTagName('li');

console.log(listItems);

// querySelector()
const container = document.querySelector('div');

console.log(container);

// querySelectorAll()

const containerAll = document.querySelectorAll('div');

console.log(containerAll);
*/


// 2. Styling an Element

/*
const title = document.querySelector('#main-heading'); // use # for id

title.style.color = 'red';

const listItems = document.querySelectorAll('.list-items');

for(i = 0; i< listItems.length; i++) {
  listItems[i].style.fontSize = '3rem';
}
*/

/*
// 3. Creating an Element

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding elements

ul.append(li); 

// Modifying the text

li.innerText = "X-Men"

// Modifiying Attributes & Classes

li.setAttribute('id', 'main-heading'); // sets attribute
li.removeAttribute('id'); //removes attribute

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));

// Remove Elements

li.remove();
*/