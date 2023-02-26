
let sum = (a,b) => a+b ;
let subtract = (a,b) => a - b; 
let multiply = (a,b) => a*b; 
let divide = (a,b) =>(a/b).toFixed(2) ; 

// let operate = (func, a,b) => func(a,b);

function operate(operand,a,b){
  switch (operand){
    case '+': return sum(a,b);
    case '-': return subtract(a,b);
    case '/': return divide(a,b);
    case '*': return multiply(a,b);
  }
}

// function to describe what to do in case of equal sign is pressed 
function equal(val) {
  let expression = val.innerText.split(/\+|\-|\/|\*/) ; // regex code for seperating number from operator 
  let first_num = expression[0], second_num = expression[1]; // associating numbers to variables 
  console.log("The first number is " + first_num); 
  console.log("The second number is " + second_num);
  val.textContent = operate(current_operand, Number(first_num) ,Number(second_num)) ; 
  return val.textContent
}

// using event delegation to call Event listener only one time 
let current_operand = null; 
let numbers = document.querySelector('.numbers');
let val = document.querySelector('.display');


let clicked = (x) => {
    if(x.target.tagName === 'BUTTON') {

      let current_val = x.target.innerText ; 

      // if(arr.length > 2){
      //   val.textContent = equal(arr);
      // }
      
      // will delete the last element  
      if (current_val == 'C'){
        val.textContent  = val.textContent.slice(0,-1) ; 
      }

      // will show addition
      else if (current_val == '+' || current_val == '-' || current_val == '*' || current_val == '/') {
        let arr = val.innerText.split(/\+|\-|\/|\*/);
        console.log(arr);
  
        if (arr.length >= 2){
          val.textContent = equal(val);

        }

        current_operand = current_val;
        val.textContent  +=  x.target.textContent;
      }

      // equal operand 
      else if (current_val == '='){
        val.textContent = equal(val);
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

t = '21x4';







