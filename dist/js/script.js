import {
  checkDecimal,
  splitExpression,
  checkDoubleOps,
  limitChars,
} from "./functions.js";

//Simplify things by grouping numbers into one class and querySelectorAll
//Do the same for the operators
//For the other buttons such as decimal point & equals, these require working with them uniquely

const display = document.querySelector("#display");

//Variable to contain the mathematical expression input by the user
let displayExpression;

//Numbers & Decimal Point
//Array.from to turn items with class name button to an array
let buttons = Array.from(document.getElementsByClassName("buttons"));
console.log(buttons);
const displayChange = buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let displayExpression = display.innerHTML;
    if (limitChars(displayExpression)) {
      alert("Number too long");
    } else {
      displayExpression += e.target.value;
    }

    if (e.target.value === "." && checkDecimal(displayExpression)) {
      return;
    }

    display.innerHTML = displayExpression;
  });
});

//Operations on input numbers
let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  let result = 0;
  let resultOps = splitExpression(displayExpression);
  operatorKey = resultOps[1];

  if (!checkDoubleOps) {
    switch (operatorKey) {
      case "+":
        result = resultOps[0] + resultOps[2];
        break;
      case "-":
        result = resultOps[0] - resultOps[2];
        break;
      case "x":
        result = resultOps[0] * resultOps[2];
        break;
      case "÷":
        result = resultOps[0] / resultOps[2];
        break;
      case "%":
        result = resultOps[0] % resultOps[2];
        break;
    }
  }
  display.innerText += result; //Show result in display screen
});

//Clear Button (AC)
let ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
  display.innerText = "0";
});
