//global
const logic = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    writeToSecond: false,

    clearGlobalVariables() {
        this.firstNumber = "";
        this.secondNumber = "";
        this.globalOperator = "";
        this.writeToSecond = false;
    },
    updateNumber(inputNumber) {
        if(!this.writeToSecond) {
            this.firstNumber += inputNumber;
            return inputNumber;
        } else {
            this.secondNumber += inputNumber;
            return inputNumber;
        }
    }

}


//display
const outputDisplay = document.querySelector(".output");

//number keys
const numButtons = document.querySelectorAll(".number-button");

/*
Append or Replace
Global Num one or two
write to global/output
 */

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const input = Number(button.textContent);
            if(outputDisplay.textContent === "0") {
                outputDisplay.textContent = logic.updateNumber(input);
            } else {
                outputDisplay.textContent += logic.updateNumber(input);
            }
            
    });
});

function appendOrReplace() {

}

function globalOneOrTwo() {
    
}

/**
 TODO
 global var handling
 equal button handling
 decimal button handling
 +/- button handling
 start going through gotchas section
 */

//operators
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        globalOperator = button.textContent;
    });
});

//other buttons
const negationButton = document.getElementById("btn-negation");
const decimalButton = document.getElementById("btn-decimal");

const backspaceButton = document.getElementById("btn-backspace");
backspaceButton.addEventListener("click", ()=> {
    if(outputDisplay.textContent.length === 1) {
        outputDisplay.textContent = 0;
    } else {
        outputDisplay.textContent = outputDisplay.textContent.slice(0,-1);
    }
    
});

//class selected buttons
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    logic.clearGlobalVariables();
    outputDisplay.textContent = "0";
});


const equalButton = document.querySelector(".equal-button");
// set globalnumbertwo, then run operate w/ global vars. nums parsed


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
        case "÷":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator");
    }
    return result;
}


