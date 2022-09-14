// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function, bool[false by default]);

const buttonTwo = document.querySelector('.btn-2');

//console.log(buttonTwo); 

function alertBtn() {
  alert("I love javascript too");
}

buttonTwo.addEventListener('click', alertBtn);



// Mouseover

const boxThree = document.querySelector('.box-3');

console.log(boxThree)

function changeBackground() {
  boxThree.style.backgroundColor = 'blue';
}

boxThree.addEventListener('mouseover', changeBackground);