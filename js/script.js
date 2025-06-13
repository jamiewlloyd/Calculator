let currentValue = '';
let previousValue = '';
let operator = '';

document.addEventListener("DOMContentLoaded", () => {
   let clear = document.querySelector('.clear');
   let equals = document.querySelector('.equals');
   let point = document.querySelector('.point');

   let numbers = document.querySelectorAll('.number');
   let operators = document.querySelectorAll('.operator');

   let previousNumberScreen = document.querySelector('#previous-number');
   let currentNumberScreen = document.querySelector('#current-number');

   numbers.forEach((number) => number.addEventListener("click", (e) => {
      handleNumber(e.target.textContent);
      currentNumberScreen.textContent = currentValue;
   }))

   operators.forEach((op) => op.addEventListener("click", (e) => {
      handleOperator(e.target.textContent);
      previousNumberScreen.textContent = previousValue + ' ' + operator;
      currentNumberScreen.textContent = '';
   }))

   clear.addEventListener("click", () => {
      previousValue = '';
      currentValue = '';
      operator = '';
      currentNumberScreen.textContent = '';
      previousNumberScreen.textContent = '';
   })
})

function handleNumber(num) {
   if (currentValue.length <= 5) {
      currentValue += num;
   }
}

function handleOperator(op) {
   operator = op;
   previousValue = currentValue;
   currentValue = '';
}