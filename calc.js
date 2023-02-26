
let sum = (a,b) => a+b ;
let subtract = (a,b) => a - b; 
let multiply = (a,b) => a*b; 
let divide = (a,b) => b/a ; 

// let operate = (func, a,b) => func(a,b);

function operate(operand,a,b){
  switch (operand){
    case '+': return sum(a,b);
    case '-': return subtract(a,b);
    case '/': return divide(a,b);
    case 'x': return multiply(a,b);
  }
}

// bugs -- first time applying operation leads to a bug 

// using event delegation to call Event listener only one time 
let current_operand = null; 
let numbers = document.querySelector('.numbers');
let val = document.querySelector('.display');


let clicked = (x) => {
    if(x.target.tagName === 'BUTTON') {

      let current_val = x.target.innerText ; 
      
      // will delete the last element  
      if (current_val == 'C'){
        val.textContent  = val.textContent.slice(0,-1) ; 
      }

      // will show addition
      else if (current_val == '+' || current_val == '-' || current_val == 'x' || current_val == '/') {
        current_operand = current_val;
        val.textContent  +=  x.target.textContent;
        console.log(val.textContent);
      }

      // equal operand 
      else if (current_val == '='){
        console.log(val.innerText);
        val.textContent = operate(current_operand, Number(val.textContent.slice(-1)) ,Number(val.textContent.slice(0,1))) ; 
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











