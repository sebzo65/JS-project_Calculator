import createElemWithText from "./dom-utils";

const operators = {
  "+": (addIt = function (a, b) {
    return a + b;
  }),
  "-": (minusIt = function (a, b) {
    return a - b;
  }),
  x: (timesIt = function (a, b) {
    return a * b;
  }),
  "/": (divideIt = function (a, b) {
    return a / b;
  }),
};

// const operation = (a, operators(), b) => {
//   if (target.value = '+') {
//       operators.values(addIt);
//   }
// };

const numButton = document.querySelectorAll(".buttons_Num");
numButton.addEventListener("click", (event) => {
  event.preventDefault();

  const parent = document.querySelector(".phoneCalculator__screen--display");
  createElemWithText("p", operation(num1.value, operator.value, num2.value));
});
