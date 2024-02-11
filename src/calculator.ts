const displayInput = document.getElementById("display") as HTMLInputElement;
let sum: number = 0;
function inputNumber(num: string) {
  if (displayInput) {
    displayInput.value = num;
  }
}

function inputOperator(operator: string) {
  if (displayInput) {
    sum = sum + Number(displayInput.value);
    displayInput.value = operator;
  }
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (let number of numbers) {
  const button = document.getElementById(number + 'Button') as HTMLButtonElement;
  if (button) {
    button.addEventListener("click", () => inputNumber(number));
  }
}

const plusButton = document.getElementById("plusButton") as HTMLButtonElement;

if (plusButton) {
  plusButton.addEventListener("click", () => {
    inputOperator("+");
  });
}

const resultButton = document.getElementById(
  "resultButton"
) as HTMLButtonElement;

function calculateResult() {
  if (displayInput) {
    sum = sum + Number(displayInput.value);
    displayInput.value = sum.toString();
  }
}

if (resultButton) {
  resultButton.addEventListener("click", () => {
    calculateResult();
  });
}

/**
 * The current input value as a string.
 */

/**
 * The previous input value as a string.
 */

/**
 * The current operation symbol (+, -, *, /) or null if none.
 */

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */

/**
 * Appends a number to the current input value and updates the display.
 * @param num - The number to append.
 */

/**
 * Sets the current operation and moves the current input value to the previous input value.
 * If there is already a previous input value, calculates the result first.
 * @param op - The operation symbol to set.
 */

/**
 * Clears the current and previous input values and the operation and updates the display.
 */

/**
 * Updates the display element with the current input value.
 */

// Initialize the display with the current input value.
