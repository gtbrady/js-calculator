/**
 TODO
 backspace button handling
 decimal button handling
 +/- button handling
 start going through gotchas section
 */

const logic = {
    firstNumber: "",
    secondNumber: "",
    operator: "",
    outputDisplay: document.querySelector(".output"),
    writeToSecond: false,
    replaceValues: true,

    clear() {
        this.firstNumber = "";
        this.secondNumber = "";
        this.operator = "";
        this.writeToSecond = false;
        this.outputDisplay.textContent = 0;
        this.replaceValues = true;
    },

    updateNumber(inputNumber) {
        //replace
        if(this.replaceValues) {
            //write to first
            if(!this.writeToSecond) {
                this.firstNumber = inputNumber;
                this.outputDisplay.textContent = inputNumber;
                this.replaceValues = false;
            //write to second
            } else {
                this.secondNumber = inputNumber;
                this.outputDisplay.textContent = inputNumber;
                this.replaceValues = false;
            }
        //append
        } else {
            //write to first
            if(!this.writeToSecond) {
                this.firstNumber += inputNumber;
                this.outputDisplay.textContent += inputNumber;
            //write to second
            } else {
                this.secondNumber += inputNumber;
                this.outputDisplay.textContent += inputNumber;
            }
        }
    },
    updateOperator(inputOperator) {
        if(this.operator != "") {
            this.operate();
        }
        this.operator = inputOperator;
        this.writeToSecond = true;
        this.replaceValues = true;
    },
    swapNumbers(resultNum) {
        this.firstNumber = resultNum;
        this.secondNumber = "";
        this.replaceValues = true;
    },

    operate() {
        let result;
        const first = Number(this.firstNumber);
        const second = Number(this.secondNumber);
        switch(this.operator) {
            case "+":
                result = add(first, second);
                break;
            case "-":
                result = subtract(first, second);
                break;
            case "x":
                result = multiply(first, second);
                break;
            case "÷":
                result = divide(first, second);
                break;
            default:
                console.log("Invalid operator");
        }
        this.outputDisplay.textContent = result;
        this.swapNumbers(result);
    }

}
//initialize display
logic.outputDisplay.textContent = 0;

//number keys
const numButtons = document.querySelectorAll(".number-button");

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        logic.updateNumber(button.textContent);
    });
});



//operators
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        logic.updateOperator(button.textContent);
    });
});

//other buttons
/* 
const backspaceButton = document.getElementById("btn-backspace");
backspaceButton.addEventListener("click", ()=> {
    if(outputDisplay.textContent.length === 1) {
        outputDisplay.textContent = 0;
    } else {
        outputDisplay.textContent = outputDisplay.textContent.slice(0,-1);
    }
    
});
*/
const negationButton = document.getElementById("btn-negation");
const decimalButton = document.getElementById("btn-decimal");


const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    logic.clear();
});


const equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", ()=> {
    logic.operate();
});


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