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
      //if there is no input2, then we have our first operator selected
      if (input2 === "") {
        inputOperator = currTargetVal;
        console.log(inputOperator);
      } else {
        //this else statement will run if the user already has an input2 and selects another operator
        //for example 7 + 1 - 3
        //we want to run operate when user selects "-"
        //input2 would need to be chosen
        //input1 would need to be the result
        const result = operate(inputOperator, Number(input1), Number(input2));

        inputOperator = currTargetVal;

        displayP.innerText = result;
        input1 = result;
        input2 = "";
        // inputOperator = "";
      }
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

  displayP.innerText = result;
  input1 = "";
  input2 = "";
  inputOperator = "";
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

// if second operator is selected, evaluate the inputs -- without needing to hit =

function populateDisplay(text) {
  displayP.innerText = text;
}

function clearDisplay() {
  displayP.innerText = "";
}
