
let sum = (a,b) => a+b ;
let subtract = (a,b) => a - b; 
let multiply = (a,b) => a*b; 
let divide = (a,b) => a/b ; 

let operate = (func, a,b) => func(a,b);

// using event delegation to call Event listener only one time 

let numbers = document.querySelector('.numbers');

let clicked = (x) => {
    if(x.target.tagName === 'BUTTON') {
      
      let val = document.querySelector('.display');
      let current_val = x.target.innerText ; 
      // will delete the last element  
      if (current_val == 'C'){
        val.innerText = val.innerText.slice(0,-1) ; 
        console.log(val.innerText);
      }
      else if (current_val == '+') {
        let a = val.innerText ; 
        val.innerText += ' ' + x.target.innerText + ' ';
        
      }
      // will insert the number
      else{
        val.innerText += x.target.innerText ;
      } 
      
    }
    
  }; 

numbers.addEventListener("click", clicked ); 

// // calling a function directly -- not efficient because event listener is called multiple times
// let elements = document.querySelectorAll('button'); 
// let clicked = (x) => { return console.log(x.innerHTML)} ;  

// elements.forEach(item => { 
//     item.addEventListener('click', () => {clicked(item);}) ;
// })










