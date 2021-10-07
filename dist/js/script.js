//What do we need? //

// import createElemWithText from "./dom-utils";

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

// const numButton = document.querySelectorAll(".buttons_Num");
const display = document.querySelector("#display");
//This will take all HTML elements with class name 'buttons' and make an array from it

//Button values will be stored within these variables in the global scope
let numA = "";
// let haveDot = false;
let operatorKey = "";
// let result = "";

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
//Function to check whether there is already a decimal point
let checkDecimal = (dot) => {
  if (dot.includes(".")) {
    return true;
  }
  return false;
};

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
    // if (e.target.innerText === "-" && checkOperator(operatorKey)) {
    //   return;
    // }
    // if (e.target.innerText === "x" && checkOperator(operatorKey)) {
    //   return;
    // }
    // if (e.target.innerText === "÷" && checkOperator(operatorKey)) {
    //   return;
    // }
    // if (e.target.innerText === "%" && checkOperator(operatorKey)) {
    //   return;
    // }

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
//Calculating with equals
//Creating a function that takes an array that stores the value
//of the mathematical expression in the calculator display
const calculate = (expression) => {
  console.log(expression);
  let expressionArray = expression.split(""); //Split the array
  let resultOps = expressionArray.findIndex((operator) => {
    //Find Index of operator in array
    return matchOperator(operator); //return operator character defined in matchOperator function
  });
  console.log(resultOps);
  let lhs = expressionArray.slice(0, resultOps).join(""); //Let lhs = string of numbers to left of operator. Then convert to a string
  let rhs = expressionArray
    .slice(resultOps + 1, expressionArray.length - 1) //Minus the equls sign which is last in array
    .join(""); //Let rhs = string of numbers to right of operator. Then convert to a string
  let ops = expressionArray.slice(resultOps, resultOps + 1).join("");

  return [parseFloat(lhs), ops, parseFloat(rhs)]; //Return the expression
};

const matchOperator = (character) => {
  if (character === "+") return true;
  if (character === "-") return true;
  if (character === "x") return true;
  if (character === "÷") return true;
  if (character === "%") return true;
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

// function mathOperations(){
//   if (lastOps === 'x'){
//     result = parseFloat(result) * parseFloat(disNum);
//   }
// }

//Get the 2 number inputs

// const calculateResult = (operand) => {
//   if (operand.includes("+")) {
//     return mathOps["plus"];
//   } else if (operand.includes("-")) {
//     return mathOps["minus"];
//   } else if (operand.includes("x")) {
//     return mathOps["times"];
//   } else {
//     return mathOps["divide"];
//   }
// };

//Check

// const calculator = {
//   displayValue: "0",
//   firstOperand: null,
//   waitingForSecondOperand: false,
//   operator: null,
// };

// function updateDisplay() {
//   const display = document.querySelector(".phoneCalculator__screen--buttons");

//   display.value = Object.values(calculator.displayValue);
// }
// updateDisplay();

// numButton.forEach(numButton =>
//   numButton.addEventListener("click", event => {
//     if (operator.includes("")){
//       a += numButton.value;
//       display.innerText = a;
//       console.log(a);
//     } else {

//     }
//   })

//   operator.forEach(operators => {
//     operator.addEventListener("click", event => {
//       if (a !== ""){
//         display.innerText = a;
//         operators = operator.value;
//       }
//     })
//   })
