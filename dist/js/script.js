import { checkDecimal, calculate, matchOperator } from "./functions.js";

//What do we need? //

//1. A function that takes 3 arguments (2 numbers + 1 operator) & that returns the result
//2. Have a way to click on key & create string (look into parseFloat() or
//parseFloat() function if you want to work with number type)
//3. A way to store the numbers in variables (check if number (length) is <= than a certain number of digits)
//4. A way to store operator clicked in a variable
//5. Have result displayed when clicking the '=' symbol (store the result value in a variable)
//6. Check if numbers contain a '.'. If it does not when clicking on the dot, add a dot.
//If it does, do nothing (Conditional check)
//7. Clear button should reset all variables 'let displayedNum = 0'

//Simplify things by grouping numbers into one class and querySelectorAll
//Do the same for the operators
//For the other buttons such as decimal point & equals, these require working with them uniquely

const display = document.querySelector("#display");
//This will take all HTML elements with class name 'buttons' and make an array from it

//Button values will be stored within these variables in the global scope
let numA;
let operatorKey;

//Numbers & Decimal Point
//Array.from to turn items with class name button to an array
let buttons = Array.from(document.getElementsByClassName("buttons"));
let displayChange = buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (display.innerHTML.length > 8) {
      //Specifying max length of characters
      display.innerHTML = alert("number too long");
    }
    if (e.target.innerText === "." && checkDecimal(numA)) {
      return;
    }
    // console.log(event.target); //Returns element that triggered the event
    // console.log(event.target.innerText); //Returns rendered text of element that triggered event
    numA += e.target.innerHTML;
    display.innerHTML = numA;
  });
});

//Operations
let operators = Array.from(document.getElementsByClassName("operations"));
let operations = operators.map((operator) => {
  operator.addEventListener("click", (e) => {
    if (numA !== "") {
      display.innerText = numA;
      operator = operators.value;
    }
    if (display.innerHTML.includes("+") && checkOperator(operator)) {
      return false;
    }

    numA += e.target.innerHTML;
    display.innerHTML = numA;
  });
});

//Function to check whether there is already a math operator
let checkOperator = (mathOp) => {
  if (mathOp === "+") {
    return true;
  }
  if (mathOp === "-") {
    return true;
  }
  if (mathOp === "x") {
    return true;
  }
  if (mathOp === "÷") {
    return true;
  }
  if (mathOp === "%") {
    return true;
  }
  return false;
};

//Find a way to remove equals sign
let result = 0;
let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  let resultOps = calculate(numA);
  operatorKey = resultOps[1];
  if (operatorKey === "+") {
    result = resultOps[0] + resultOps[2];
  }
  if (operatorKey === "-") {
    result = resultOps[0] - resultOps[2];
  }
  if (operatorKey === "x") {
    result = resultOps[0] * resultOps[2];
  }
  if (operatorKey === "÷") {
    result = resultOps[0] / resultOps[2];
  }
  if (operatorKey === "%") {
    result = resultOps[0] % resultOps[2];
  }
  display.innerText += result; //Show result in display screen
});

//Clear Button (AC)
ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
  display.innerText = "0";
  numA = "";
});
