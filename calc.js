// all the functions are here

const sum = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => (a / b).toFixed(2)

// let operate = (func, a,b) => func(a,b);

function operate (operand, a, b) {
  switch (operand) {
    case '+': return sum(a, b)
    case '-': return subtract(a, b)
    case '/': return divide(a, b)
    case '*': return multiply(a, b)
  }
}

// function to describe what to do in case of equal sign is pressed
function equal (val) {
  const expression = val.innerText.split(/\+|-|\/|\*/) // regex code for seperating number from operator
  const firstNum = expression[0]
  const secondNum = expression[1] // associating numbers to variables
  console.log('The first number is ' + firstNum)
  console.log('The second number is ' + secondNum)
  val.textContent = operate(currentOperand, Number(firstNum), Number(secondNum))
  return val.textContent
}

// using event delegation to call Event listener only one time
let currentOperand = null
const numbers = document.querySelector('.numbers')
const val = document.querySelector('.display')

const clicked = (x) => {
  if (x.target.tagName === 'BUTTON') {
    const currentVal = x.target.innerText

    // will delete the last element
    if (currentVal === 'C') {
      val.textContent = val.textContent.slice(0, -1)
    } else if (currentVal === '+' || currentVal === '-' || currentVal === '*' || currentVal === '/') {
      const arr = val.innerText.split(/\+|-|\/|\*/)
      console.log(arr)

      if (arr.length >= 2) {
        val.textContent = equal(val)
      }

      currentOperand = currentVal
      val.textContent += x.target.textContent
    } else if (currentVal === '=') { // equal operand
      val.textContent = equal(val)
    } else { // will insert the number
      val.textContent += currentVal
    }
  }
}

numbers.addEventListener('click', clicked)

// // calling a function directly -- not efficient because event listener is called multiple times
// let elements = document.querySelectorAll('button');
// let clicked = (x) => { return console.log(x.innerHTML)} ;

// elements.forEach(item => {
//     item.addEventListener('click', () => {clicked(item);}) ;
// })
