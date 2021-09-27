//Calling Elements//
const display = document.getElementsByClassName(
  "phoneCalculator__screen--display"
);
//First Line Buttons//
const buttonsFirst = document.getElementsByClassName("buttons__firstLine");
//AC Button
const ac = document.getElementsByClassName("buttons__firstLine--AC");
// +/- Button
const plusMinus = document.getElementsByClassName(
  "buttons__firstLine--plusMinus"
);
//Percentage Button
const percentage = document.getElementsByClassName(
  "buttons__firstLine--percentage"
);
//Division Button
const divide = document.getElementsByClassName("buttons__firstLine--divide");

//Second Line Buttons//
//Number 7 Button
const seven = document.getElementsByClassName("buttons__secondLine--seven");
//Number 8 Button
const eight = document.getElementsByClassName("buttons__secondLine--eight");
//Number 9 Button
const nine = document.getElementsByClassName("buttons__secondLine--nine");
//Multiplication Button
const multiply = document.getElementsByClassName(
  "buttons__secondLine--multiply"
);

//Third Line Buttons//
//Number 4 Button
const four = document.getElementsByClassName("buttons__thirdLine--four");
//Number 5 Button
const five = document.getElementsByClassName("buttons__thirdLine--five");
//Number 6 Button
const six = document.getElementsByClassName("buttons__thirdLine--six");
//Subtraction Button
const minus = document.getElementsByClassName("buttons__thirdLine--minus");

//Fourth Line Buttons//
//Number 1 Button
const one = document.getElementsByClassName("buttons__fourthLine--one");
//Number 2 Button
const two = document.getElementsByClassName("buttons__fourthLine--two");
//Number 3 Button
const three = document.getElementsByClassName("buttons__fourthLine--three");
//Addition Button
const plus = document.getElementsByClassName("buttons__fourthLine--plus");

//Fifth Line Buttons//
//Number 0 Button
const zero = document.getElementsByClassName("buttons__fifthLine--zero");
//Decimal Button
const decimal = document.getElementsByClassName("buttons__fifthLine--decimal");
//Equals Button
const equals = document.getElementsByClassName("buttons__fifthLine--equals");

buttonsFirst.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  seven.event.target.value;
  if (display.value !== "") {
    display.value += 7;
  }
}
