import { limitChars, updateDisplay, updateCurrentNum } from "./functions.js";

//Simplify things by grouping numbers into one class and querySelectorAll
//Do the same for the operators
//For the other buttons such as decimal point & equals, these require working with them uniquely

let display = document.querySelector("#display");
//Numbers & Decimal Point
//Array.from to turn items with class name button to an array
const buttons = document.querySelectorAll(".buttons");
const ops = document.querySelectorAll("ops");
const clear = document.querySelector("#ac");
const equals = document.querySelector("#equals");
const percent = document.querySelector("#percentage");

//Store values//
//Variable to contain the mathematical expression input by the user
let displayExpression;
let currentNum = "";
let storedNum = 0;
let lastOp = "";
let haveDot = false;
let result = 0;

//Clear button
clear.addEventListener("click", () => {
  display.innerText = "";
  currentNum = currentNum.innerText = "";
  storedNum = storedNum.innerText = "";
});

//Input number values into display and store values
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let target = e.target;

    if (target.innerText === "." && !haveDot) {
      //selecting "." and if we havent selected "." before then we can add the value
      let value = target.innerHTML;
      display.innerHTML += value; // add value to screen
      currentNum += value; // add value to total num
      haveDot = true; //haveDot is false and once we add a "." we change the value to true so it cannot add it again
    } else if (target.innerText === "." && haveDot) {
      return;
    } else if (!limitChars(display.innerHTML)) {
      let value = target.innerHTML; //value of event target
      display.innerHTML += value; // add value to screen
      currentNum = currentNum += value; // add value to total num
      console.log(currentNum);
    }
  });
});

//Inputtin operators
ops.forEach((button) => {
  button.addEventListener("click", (e) => {
    haveDot = false;
    if (display && currentNum) {
      lastOp += e.target.innerText;
      console.log(lastOp);
      storedNum = parseFloat(currentNum);
      display.innerText = "";
      return;
    }
  });
});
console.log(lastOp);
