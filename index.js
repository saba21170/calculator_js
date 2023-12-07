//function for add input
function appendCharacter(char) {
    const inputElement = document.getElementById('input');
    inputElement.value += char;
}

//function for clear all input
function clearInput() {
    const inputElement = document.getElementById('input');
    inputElement.value = '';
}

//function for remove last character
function removeLastCharacter() {
    const inputElement = document.getElementById('input');
    const currentExpression = inputElement.value;

    const newExpression = currentExpression.slice(0, -1);

    // Update the input field with the new expression
    inputElement.value = newExpression;
}

//function for calculation 
function calculate() {
    const inputElement = document.getElementById('input');
    const expression = inputElement.value;

    try {
        const result = simpleCalculate(expression);
        if (result !== undefined) {
            inputElement.value = result;  // Update the input field with the result
        } else {
            alert('Invalid expression');
        }
    } catch (error) {
        alert('Invalid expression');
    }
}

function simpleCalculate(expression) {
    const tokens = expression.match(/[\d.]+|\+|\-|\*|\/|\%/g);

    if (!tokens || tokens.length % 2 === 0) {
        return undefined; // Invalid expression
    }

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);

        if (!isNaN(operand)) {
            if (operator === '+') {
                result += operand;
            } else if (operator === '-') {
                result -= operand;
            } else if (operator === '*') {
                result *= operand;
            } else if (operator === '/') {
                result /= operand;
            } else if (operator === '%') {
                result %= operand;
            } else {
                return undefined; // Invalid operator
            }
        } else {
            return undefined; // Invalid expression
        }
    }

    return result;
}
