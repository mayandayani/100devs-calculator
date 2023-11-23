// Converting elements into variables
const displayNumbers = document.getElementById("displayNumbers");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.getElementById("buttonEquals");

const buttonSeven = document.getElementById("buttonNumber7");
const buttonEight = document.getElementById("buttonNumber8");
const buttonNine = document.getElementById("buttonNumber9");
const buttonDivide = document.getElementById("buttonDivide");
const buttonFour = document.getElementById("buttonNumber4");
const buttonFive = document.getElementById("buttonNumber5");
const buttonSix = document.getElementById("buttonNumber6");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonOne = document.getElementById("buttonNumber1");
const buttonTwo = document.getElementById("buttonNumber2");
const buttonThree = document.getElementById("buttonNumber3");
const buttonAdd = document.getElementById("buttonAdd");
const buttonZero = document.getElementById("buttonNumber0");
const buttonDot = document.getElementById("buttonDot");
const buttonEquals = document.getElementById("buttonEquals");
const buttonSubtract = document.getElementById("buttonSubtract");


// Event listener for numbers
buttonSeven.addEventListener("click", function () {
    appendToInput("7");
});

buttonEight.addEventListener("click", function () {
    appendToInput("8");
});

buttonNine.addEventListener("click", function () {
    appendToInput("9");
});

buttonFour.addEventListener("click", function () {
    appendToInput("4");
});

buttonFive.addEventListener("click", function () {
    appendToInput("5");
});

buttonSix.addEventListener("click", function () {
    appendToInput("6");
});

buttonOne.addEventListener("click", function () {
    appendToInput("1");
});

buttonTwo.addEventListener("click", function () {
    appendToInput("2");
});

buttonThree.addEventListener("click", function () {
    appendToInput("3");
});

buttonZero.addEventListener("click", function () {
    appendToInput("0");
});

buttonDot.addEventListener("click", function () {
    if (!currentInput.includes(".")) {
        appendToInput(".");
    }
});

// Update Display
function appendToInput(value) {
    if (value === "." && currentInput.includes(".")) {
        return;
    }

    if (currentInput.length < 12) {
        currentInput += value;
        updateDisplay();
    }
}

// Update Display without formatting commas
const updateDisplay = () => {
    displayNumbers.textContent = currentInput;
};

// Event listener for operators
buttonAdd.addEventListener("click", function () {
    handleOperator("+");
});

buttonSubtract.addEventListener("click", function () {
    handleOperator("-");
});

buttonMultiply.addEventListener("click", function () {
    handleOperator("*");
});

buttonDivide.addEventListener("click", function () {
    handleOperator("/");
});

buttonEquals.addEventListener("click", function () {
    handleEquals();
});

let currentInput = "";
let storedInput = "";
let storedOperator = "";

//Operator logic flow
function handleOperator(operator) {
    if (storedInput !== "" && storedOperator !== "") {
        currentInput = calculate(storedInput, currentInput, storedOperator);
        storedInput = "";
    } else {
        storedInput = currentInput;
    }

    storedOperator = operator;
    currentInput = "";
    updateDisplay();
}

// Actual math calculations
function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2; 
    }
}

// Equals button
function handleEquals() {
    if (storedInput !== "" && storedOperator !== "") {
        currentInput = calculate(storedInput, currentInput, storedOperator);
        storedInput = "";
        storedOperator = "";
        updateDisplay();
        currentInput = "";
    }
}

