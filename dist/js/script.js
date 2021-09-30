//Calling Elements//
const display = document.querySelector(".phoneCalculator__screen--display");
//First Line Buttons//
const buttonsFirst = document.querySelector(".buttons__firstLine");
//AC Button
const ac = document.getElementById("AC");
// +/- Button
const plusMinus = document.getElementById("plusMinus");
//Percentage Button
const percentage = document.getElementById("percentage");
//Division Button
const divide = document.getElementById("divide");

//Second Line Buttons//
//Number 7 Button
const seven = document.getElementById("seven");
//Number 8 Button
const eight = document.getElementById("eight");
//Number 9 Button
const nine = document.getElementById("nine");
//Multiplication Button
const multiply = document.getElementById("multiply");

//Third Line Buttons//
//Number 4 Button
const four = document.getElementById("four");
//Number 5 Button
const five = document.getElementById("five");
//Number 6 Button
const six = document.getElementById("six");
//Subtraction Button
const minus = document.getElementById("minus");

//Fourth Line Buttons//
//Number 1 Button
const one = document.getElementById("one");
//Number 2 Button
const two = document.getElementById("two");
//Number 3 Button
const three = document.getElementById("three");
//Addition Button
const plus = document.getElementById("plus");

//Fifth Line Buttons//
//Number 0 Button
const zero = document.getElementById("zero");
//Decimal Button
const decimal = document.getElementById("decimal");
//Equals Button
const equals = document.getElementById("equals");

// Triggering Events with Buttons //

// display.value = "";
// for (i = 0; i < buttonsFirst.childNodes.length; i++) {
//   buttonsFirst.childNodes[i].addEventListener("click", calculate);
// }
const calculator = {
  displayValue: "0", //user input
  num1: null, //1st part of mathematical expression
  waitingForSecondNum: false, //Check whether 1st expression & math operator have been inputted
  operator: null, //Math operator for expression
};

// function updateDisplay() {
//   display;
//   display.value = calculator.displayValue;
// }
// updateDisplay();

// const keys = buttonsFirst;
// keys.addEventListener("click", (event) => {
//   const { target } = event; //Equivalent of event.target
//   //target variable represents element that is clicked
//   if (!target.matches("button")) {
//     return;
//   }
//   if (target.classList.contains("operator")) {
//     console.log("operator", target.value);
//     return;
//   }
//   if (target.classList.contains("decimal")) {
//     console.log("decimal", target.value);
//     return;
//   }
//   if (target.classList.contains("all-clear")) {
//     console.log("clear", target.value);
//     return;
//   }
//   console.log("digit", target.value);
// });

//First Line Buttons//

//AC
ac.addEventListener("click", clearClick);

function clearClick(event) {
  display.value = "";
}
//plusMinus
//percentage

//divide
divide.value = " / ";
divide.addEventListener("click", divideClick);

function divideClick(event) {
  display.value += divide.value;
}

//Second Line Buttons//

//Number 7
seven.value = 7;
seven.addEventListener("click", sevenClick);

function sevenClick(event) {
  display.value += seven.value;
}

//Number 8
eight.value = 8;
eight.addEventListener("click", eightClick);

function eightClick(event) {
  display.value += eight.value;
}

//Number 9
nine.value = 9;
nine.addEventListener("click", nineClick);

function nineClick(event) {
  display.value += nine.value;
}

//Multiply
multiply.value = " x ";
multiply.addEventListener("click", multiplyClick);

function multiplyClick(event) {
  display.value += multiply.value;
}

//Third Line Buttons//

//Number 4
four.value = 4;
four.addEventListener("click", fourClick);

function fourClick(event) {
  display.value += four.value;
}

//Number 5
five.value = 5;
five.addEventListener("click", fiveClick);

function fiveClick(event) {
  display.value += five.value;
}

//Number 6
six.value = 6;
six.addEventListener("click", sixClick);

function sixClick(event) {
  display.value += six.value;
}

//Minus
minus.value = " - ";
minus.addEventListener("click", minusClick);

function minusClick(event) {
  display.value += minus.value;
}

//Fourth Line Buttons//

//Number 1
one.value = 1;
one.addEventListener("click", oneClick);

function oneClick(event) {
  display.value += one.value;
}

//Number 2
two.value = 2;
two.addEventListener("click", twoClick);

function twoClick(event) {
  display.value += two.value;
}

//Number 3
three.value = 3;
three.addEventListener("click", threeClick);

function threeClick(event) {
  display.value += three.value;
}

//Plus
plus.value = " + ";
plus.addEventListener("click", plusClick);

function plusClick(event) {
  display.value += plus.value;
}

// const calculator = {
//   displayValue: "0", //user input
//   num1: null, //1st part of mathematical expression
//   waitingForSecondNum: false, //Check whether 1st expression & math operator have been inputted
//   operator: null, //Math operator for expression
// };

function updateDisplay() {
  display;
  display.value = calculator.displayValue;
}
updateDisplay();

// const currentValue = display.value;
// function addition (event, num1){
//     plus.click(function(event){
//     if($(this).hasClass("num")){
// let nextNum = parseInt(buttonClicked);
// currentValue.html(nextNum);
// let result = num1 + nextNum;
// storeAnswer(result);
// return result;
//     };
// function getCurrentValue(number) {
//   let currentValue = display.value;
//   if (currentValue === ""){
//       return currentValue +
//   }
//   currentValue = parseInt(currentValue, 10);
//   return currentValue;
// }

// function plusOperation() {
//   let a = Number(seven);
//   let b = Number(eight);
//   let c = a + b;
//   display.value = c;
// }

// for (i = 0; i < buttonsFirst.childNodes.length; i++) {
//   buttonsFirst.childNodes[i].addEventListener("click", calculate);
// }

//Fifth Line Buttons//

//Number 0
zero.value = 0;
zero.addEventListener("click", zeroClick);

function zeroClick(event) {
  display.value += zero.value;
}

//decimal point
decimal.value = ".";
decimal.addEventListener("click", decimalClick);

function decimalClick(event) {
  display.value += decimal.value;
}

//Equals sign
equals.value = " = ";
equals.addEventListener("click", equalsClick);

function equalsClick(event) {
  display.value += equals.value;
}

equals.addEventListener("click", parse);
function parse(str) {
  parse(display.value);
}

// equals.addEventListener("click", parse);
// function parse(str) {
//   return Function(`'use strict'; return (${str})`)();
// }
// parse(display.value);
