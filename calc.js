
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

// https://dev.to/smpnjn/javascript-add-event-listener-to-multiple-elements-2jah -- read this link
let elements = document.querySelectorAll('.button');

let clickEvent = () => {
    console.log('some event content here...')
}
elements.forEach((item) => {
    item.addEventListener('click', clickEvent)
});
