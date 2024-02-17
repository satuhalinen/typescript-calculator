/**
 * The current input value as a string.
 */
let currentInput: string = "";
/**
 * The previous input value as a string.
 */
let previousInput: string = "";
/**
 * The current operation symbol (+, -, *, /) or null if none.
 */
let currentOperationSymbol: string | null = null;
/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */

function calculateResult() {
  if (
    !isNaN(Number(previousInput)) &&
    !isNaN(Number(currentInput)) &&
    currentOperationSymbol
  ) {
    if (currentOperationSymbol === "+") {
      currentInput = String(Number(previousInput) + Number(currentInput));
    }
    else if (currentOperationSymbol === "-") {
      currentInput = String(Number(previousInput) - Number(currentInput));
    }
    else if (currentOperationSymbol === "*") {
      currentInput = String(Number(previousInput) * Number(currentInput));
    }
    else if (currentOperationSymbol === "/") {
      currentInput = String(Number(previousInput) / Number(currentInput));
    }
  }
  updateDisplayElement();
  previousInput = "";
}

/**
 * Updates the display element with the current input value.
 */
let displayElement = document.getElementById("display") as HTMLInputElement;
function updateDisplayElement() {
  displayElement.value = currentInput;
}

/**
 * Appends a number to the current input value and updates the display.
 * @param num - The number to append.
 */

function inputNumber(num: string) {
  currentInput = currentInput + num;
  updateDisplayElement();
}

/**
 * Sets the current operation and moves the current input value to the previous input value.
 * If there is already a previous input value, calculates the result first.
 * @param op - The operation symbol to set.
 */

function inputOperator(op: string) {
currentOperationSymbol = op;
if(previousInput){
  calculateResult();
}
previousInput = currentInput;
currentInput = "";
}

/**
 * Clears the current and previous input values and the operation and updates the display.
 */
function clearDisplay(){
  currentInput = "";
  previousInput = "";
  currentOperationSymbol = null;
  updateDisplayElement();
}

// Initialize the display with the current input value.
displayElement.value = currentInput;

window.inputOperator = inputOperator;
window.clearDisplay = clearDisplay;
window.calculateResult = calculateResult;
window.inputNumber = inputNumber;


