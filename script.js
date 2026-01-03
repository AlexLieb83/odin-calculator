const displayP = document.getElementById("display");

const buttons = document.querySelectorAll("button");

const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

//state
let input1 = "";
let input2 = "";
let inputOperator = "";

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const operators = ["+", "-", "*", "/"];
    const currTargetVal = e.target.textContent;

    if (operators.includes(currTargetVal)) {
      inputOperator = currTargetVal;
      console.log(inputOperator);
    } //if there's no inputOperator
    else if (!inputOperator) {
      input1 += currTargetVal;
    } else if (inputOperator && currTargetVal != "=") {
      input2 += currTargetVal;
    }

    populateDisplay(`${input1} ${inputOperator} ${input2}`);
  })
);

clearBtn.addEventListener("click", clearDisplay);

//need to figure out how to store the variables to access here, inputOperator, input1, input2
equalBtn.addEventListener("click", () => {
  const result = operate(inputOperator, Number(input1), Number(input2));

  //clear display
  // clearDisplay()
  displayP.innerText = result;
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);

  console.log(num1);
  console.log(num2);

  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

//click num, click operation, click other number

//store num1, operation function, click num2

//if click add button, then run add function

//user hits 7, displayP changes to 7
//user hits +, displayP changes to 7 +
//user hits 7, displayP changes to 7 + 7
//user hits =, displayP changes to 7 + 7 = 14
function populateDisplay(text) {
  displayP.innerText = text;
}

function clearDisplay() {
  displayP.innerText = "";
}
