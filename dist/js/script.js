//What do we need? //

//1. A function that takes 3 arguments (2 numbers + 1 operator) & that returns the result
//2. Have a way to click on key & create string (look into parseInt() or
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
const ac = document.getElementById("#AC");
const display = document.querySelector(".phoneCalculator__screen--display");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const plusMinus = document.querySelector("#plusMinus");
const percentage = document.querySelector("#percentage");

//Change the display when buttons selected
const displayChange = (val) => {
  display.innerHTML += val;
  console.log(display.innerHTML);
};

//Object containing the operators
const operations = {
  plus: "+",
  minus: "-",
  multiply: "x",
  divide: "/",
};

//1st check - No symbols present before adding one
const checkBeforeDisplayChange = (element) => {
  const symbol = element.dataset.value;
  if (
    display.innerHTML.includes(operations["plus"]) ||
    display.innerHTML.includes(operations["minus"]) ||
    display.innerHTML.includes(operations["divide"]) ||
    display.innerHTML.includes(operations["multiply"])
  ) {
    alert("Must not contain any other symbols");
  } else {
    displayChange(symbol);
  }
};

//These are the variables within which the button inputs for the numbers and operators
//and other values will be stored
let a = parseInt(""); //firstNumber
let b = parseInt(""); //secondNumber
let result = parseInt("");
let operator = "";
let point = "";

//An object factory function containing all of the math operations that I will refer to within the
//function to calculate the value of the inputs in the display screen
//Encapsulating everything within this object makes it easier to access these values
//elsewhere in the code
function mathOps() {
  return {
    plus: function (a, b) {
      return parseInt(a) + parseInt(b);
    },
    minus: function (a, b) {
      return parseInt(a) - parseInt(b);
    },
    times: function (a, b) {
      return parseInt(a) * parseInt(b);
    },
    divide: function (a, b) {
      return parseInt(a) / b;
    },
  };
}

//Get the 2 number inputs

const calculateResult = (operand) => {
  if (operand === operators.plus) {
    return mathOps["plus"];
  } else if (operand === operators.minus) {
    return mathOps["minus"];
  } else if (operand === operators.multiply) {
    return mathOps["times"];
  } else {
    return mathOps["divide"];
  }
};

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
//     if (operator === ""){
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
