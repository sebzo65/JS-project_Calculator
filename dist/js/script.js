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

//Button values will be stored within these variables
let haveDot = false;
let numA = "";
let numB = "";
let operator = "";
let result = "";

//Numbers & Decimal Point
//Array.from to turn items with class name button to an array
let buttons = Array.from(document.getElementsByClassName("buttons"));
let displayChange = buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true; //Check if there's already a decimal point
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    // console.log(event.target); //Returns element that triggered the event
    // console.log(event.target.innerText); //Returns rendered text of element that triggered event
    numA += e.target.innerHTML;
    display.innerHTML = numA;
  });
});

//Function that will be called upon when performing operations
// const mathOps = (numA, numB, operand) => {
//   // result = "";
//   if (operand === "+") {
//     result = parseFloat(numA) + parseFloat(numB);
//   } else if (operand === "-") {
//     result = parseFloat(numA) - parseFloat(numB);
//   } else if (operand === "x") {
//     result = parseFloat(numA) * parseFloat(numB);
//   } else if (operand === "÷") {
//     result = parseFloat(numA) / parseFloat(numB);
//   } else if (operand === "%") {
//     result = parseFloat(numA) % parseFloat(numB);
//   }
//   return numB;
// };
const mathOps = (numA, numB, operand) => {
  // result = "";
  if (operand === "+") {
    return numA + numB;
  } else if (operand === "-") {
    return numA - numB;
  } else if (operand === "x") {
    return numA * numB;
  } else if (operand === "÷") {
    return numA / numB;
  } else if (operand === "%") {
    return numA % numB;
  }
  return numB;
};

//Operations
let operators = Array.from(document.getElementsByClassName("operations"));
let operations = operators.map((operator) => {
  operator.addEventListener("click", (e) => {
    if (numA !== "") {
      display.innerText = numA;
      operator = operators.value;
    }
    // if (numA !== "" && numB !== "") {
    //   numA = mathOps(numA, numB, operator);
    //   numB = "";
    //   display.innerText = numA;
    //   operator = operators.value;
    // }
    else if (numA !== "" && numB !== "") {
      result = mathOps(numA, numB, operator);
      display.innerText = result;
    }
    numA += e.target.innerHTML;
    display.innerHTML = numA;
  });
});
//Calculating with equals
let equals = document.querySelector("#equals");
equals.addEventListener("click", (e) => {
  result = mathOps(numA, numB, operator);
  display.innerText = result;
});

//Clear Button (AC)
ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
  display.innerText = "0";
  numA = "";
  numB = "";
  operator = "";
  result = "";
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
