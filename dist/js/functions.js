//Function to check whether there is already a decimal point
export const checkDecimal = (dot) => {
  if (dot.includes(".")) {
    return true;
  }
  return false;
};

//Creating a function that takes an array that stores the value
//of the mathematical expression in the calculator display
export const calculate = (expression) => {
  console.log("Expression:", expression);
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

export const matchOperator = (character) => {
  if (character === "+") return true;
  if (character === "-") return true;
  if (character === "x") return true;
  if (character === "÷") return true;
  if (character === "%") return true;
  return false;
};
