//global
let globalNumberOne;
let globalNumberTwo;
let globalOperator;

//display
const outputDisplay = document.querySelector(".output");

//number keys
const numButton1 = document.getElementById("btn-1");
const numButton2 = document.getElementById("btn-2");
const numButton3 = document.getElementById("btn-3");
const numButton4 = document.getElementById("btn-4");
const numButton5 = document.getElementById("btn-5");
const numButton6 = document.getElementById("btn-6");
const numButton7 = document.getElementById("btn-7");
const numButton8 = document.getElementById("btn-8");
const numButton9 = document.getElementById("btn-9");
const numButton0 = document.getElementById("btn-0");

//operators
const divideButton = document.getElementById("btn-divide");
const multiplyButton = document.getElementById("btn-multiply");
const subtractButton = document.getElementById("btn-subtract");
const addButton = document.getElementById("btn-add");

//other buttons
const negationButton = document.getElementById("btn-negation");
const decimalButton = document.getElementById("btn-decimal");
const backspaceButton = document.getElementById("btn-backspace");

//class selected buttons
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    clearGlobalVariables();
    outputDisplay.textContent = "0";
});


const equalButton = document.querySelector(".equal-button");


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) {
        return "Cannot divide by 0";
    }
    else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    let result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator");
    }
    return result;
}

function clearGlobalVariables() {
    globalNumberOne = null;
    globalNumberTwo = null;
    globalOperator = null;
}
