let displayValue = '';
const displayElement = document.getElementById('display');

function appendToDisplay(value) {
    if (value === 'Math.sqrt(') {
        // Display the square root symbol when the button is clicked
        displayValue += '√';
    } else {
        displayValue += value;
    }
    displayElement.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    displayElement.value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        displayElement.value = displayValue;
    } catch (error) {
        displayElement.value = 'Error';
    }
}
// Add the square root function
/**function squareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        displayElement.value = displayValue;
    } catch (error) {
        displayElement.value = 'Error';
    }
}
*/
