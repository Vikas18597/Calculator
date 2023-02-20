
let sum = (a,b) => a+b ;
let subtract = (a,b) => a - b; 
let multiply = (a,b) => a*b; 
let divide = (a,b) => a/b ; 

let operate = (func, a,b) => func(a,b);

console.log(operate(sum, 4,5));


