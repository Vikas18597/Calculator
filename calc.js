
let sum = (a,b) => a+b ;
let subtract = (a,b) => a - b; 
let multiply = (a,b) => a*b; 
let divide = (a,b) => a/b ; 

let operate = (func, a,b) => func(a,b);

// using event delegation to call Event listener only one time 

let numbers = document.querySelector('.numbers');

let clicked = (x) => {
    if(x.target.tagName === 'BUTTON') {
      let current_operand = null;
      let val = document.querySelector('.display');
      let current_val = x.target.innerText ; 

      // will delete the last element  
      if (current_val == 'C'){
        val.textContent  = val.textContent.slice(0,-1) ; 
      }

      // will show addition
      else if (current_val == '+') {
        current_operand = '+';
        val.textContent  +=  x.target.textContent;
      }

      // equal operand 
      else if (current_val == '='){
        if (current_operand = '+'){
          val.textContent = Number(val.textContent.slice(-1)) + Number(val.textContent.slice(0,1)) ; 
        }
      }

      // will insert the number
      else{
        val.textContent += current_val ;
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











