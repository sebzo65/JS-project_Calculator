//Function to check whether there is already a decimal point
export const checkDecimal = (dot) => {
  if (dot.includes(".")) {
    return true;
  }
  return false;
};

//Creating a function that takes an array that stores the value
//of the mathematical expression in the calculator display
export const splitExpression = (expression) => {
  let expressionArray = expression.split(""); //Split the array
  let resultOps = expressionArray.findIndex((operator) => {
    //Find Index of operator in array
    return matchOperator(operator); //return operator character defined in matchOperator function
  });
  console.log("resultOps", resultOps);
  let lhs = expressionArray.slice(0, resultOps).join(""); //Let lhs = string of numbers to left of operator. Then convert to a string
  let rhs = expressionArray
    .slice(resultOps + 1, expressionArray.length - 1) //Minus the equls sign which is last in array
    .join(""); //Let rhs = string of numbers to right of operator. Then convert to a string
  let ops = expressionArray.slice(resultOps, resultOps + 1).join("");

  return [parseFloat(lhs), ops, parseFloat(rhs)]; //Return the expression
};

//Function to match the operator
export const matchOperator = (character) => {
  if (character === "+") return true;
  if (character === "-") return true;
  if (character === "x") return true;
  if (character === "÷") return true;
  if (character === "%") return true;
  return false;
};

//Function to check whether there is already an operator
export const checkDoubleOps = (arr, ops) => {
  if (arr.includes(ops)) {
    return true;
  }
};

//Function to limit number of input characters to 8
export const limitChars = (displayText) => {
  if (displayText.length > 8) {
    return true;
  }
};

//Function to execute computation
export const performMath = (arr, text, ops) => {
  let result = 0;

  if (!checkDoubleOps) {
    switch (ops) {
      case "+":
        result = arr[0] + arr[2];
        break;
      case "-":
        result = arr[0] - arr[2];
        break;
      case "x":
        result = arr[0] * arr[2];
        break;
      case "÷":
        result = arr[0] / arr[2];
        break;
      case "%":
        result = arr[0] % arr[2];
        break;
    }
  }
  text = result; //Show result in display
};

//Function to update the display
export const updateDisplay = (n, text) => {
  text += n;
};

//Function to update the current number
export const updateCurrentNum = (n, text, currNum) => {
  text += n;
  currNum = n;
};
