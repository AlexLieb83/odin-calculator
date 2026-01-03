const displayP = document.getElementById("display");

const buttons = document.querySelectorAll("button");

const clearBtn = document.getElementById("clear");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    populateDisplay(e.target.textContent);
  })
);

clearBtn.addEventListener("click", clearDisplay);

let input1;
let input2;
let inputOperator;

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

function operate(operator, num1, num2) {
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

console.log(operate("*", 5, 7));

//click num, click operation, click other number

//store num1, operation function, click num2

//if click add button, then run add function

//user hits 7, displayP changes to 7
//user hits +, displayP changes to 7 +
//user hits 7, displayP changes to 7 + 7
//user hits =, displayP changes to 7 + 7 = 14
function populateDisplay(text) {
  displayP.innerText += text;
}

function clearDisplay() {
  displayP.innerText = "";
}
