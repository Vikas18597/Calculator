
let sum = (a,b) => a+b ;
let subtract = (a,b) => a - b; 
let multiply = (a,b) => a*b; 
let divide = (a,b) => a/b ; 

let operate = (func, a,b) => func(a,b);

// creating dictionary of buttons
 
let buttons = {};

for(i = 0; i < 10; i++){
    buttons["button-" +i] = document.getElementById("button-"+i) ;
}



let numbers = document.querySelector('.numbers');

let clicked = (x) => {
    if(x.target.tagName === 'BUTTON') {
      console.log(x.target.innerHTML);
    }
  }; 

numbers.addEventListener("click", clicked ); 

// // calling a function directly -- not efficient because event listener is called multiple times
// let elements = document.querySelectorAll('button'); 
// let clicked = (x) => { return console.log(x.innerHTML)} ;  

// elements.forEach(item => { 
//     item.addEventListener('click', () => {clicked(item);}) ;
// })









