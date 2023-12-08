//function for add input
// function appendCharacter(char) {
//     const inputElement = document.getElementById('input');
//     inputElement.value += char;
// }

// //function for clear all input
// function clearInput() {
//     const inputElement = document.getElementById('input');
//     inputElement.value = '';
// }

// //function for remove last character
// function removeLastCharacter() {
//     const inputElement = document.getElementById('input');
//     const currentExpression = inputElement.value;

//     const newExpression = currentExpression.slice(0, -1);

//     // Update the input field with the new expression
//     inputElement.value = newExpression;
// }

// //function for calculation
// function calculate() {
//     const inputElement = document.getElementById('input');
//     const expression = inputElement.value;

//     try {
//         const result = simpleCalculate(expression);
//         if (result !== undefined) {
//             inputElement.value = result;  // Update the input field with the result
//         } else {
//             alert('Invalid expression');
//         }
//     } catch (error) {
//         alert('Invalid expression');
//     }
// }

// function simpleCalculate(expression) {
//     const tokens = expression.match(/[\d.]+|\+|\-|\*|\/|\%/g);

//     if (!tokens || tokens.length % 2 === 0) {
//         return undefined; // Invalid expression
//     }

//     let result = parseFloat(tokens[0]);

//     for (let i = 1; i < tokens.length; i += 2) {
//         const operator = tokens[i];
//         const operand = parseFloat(tokens[i + 1]);

//         if (!isNaN(operand)) {
//             if (operator === '+') {
//                 result += operand;
//             } else if (operator === '-') {
//                 result -= operand;
//             } else if (operator === '*') {
//                 result *= operand;
//             } else if (operator === '/') {
//                 result /= operand;
//             } else if (operator === '%') {
//                 result %= operand;
//             } else {
//                 return undefined; // Invalid operator
//             }
//         } else {
//             return undefined; // Invalid expression
//         }
//     }

//     return result;
// }

//Calculator through ES6

// Function to add input
const appendCharacter = (char) => {
  const inputElement = document.getElementById("input");
  inputElement.value += char;
};

// Function to clear all input
const clearInput = () => {
  const inputElement = document.getElementById("input");
  inputElement.value = "";
};

// Function to remove the last character
const removeLastCharacter = () => {
  const inputElement = document.getElementById("input");
  const currentExpression = inputElement.value;

  const newExpression = currentExpression.slice(0, -1);

  // Update the input field with the new expression
  inputElement.value = newExpression;
};

// Function for calculation
const startCalculation = async () => {
  const inputElement = document.getElementById("input");
  const loadingMessage = document.getElementById("loading-message");

  const expression = inputElement.value;

  try {
    // Show loading message
    loadingMessage.textContent = "Calculating results...";
    loadingMessage.style.display = "block"; // Make the loading message div visible

    //for delaying the result use promise
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //calculation
    const result = simpleCalculate(expression);
    if (result !== undefined) {
      inputElement.value = result; // Update the input field with the result
    } else {
      alert("Invalid expression");
    }
  } catch (error) {
    alert("Invalid expression");s
  } finally {
    // Hide the loading message after the calculation
    loadingMessage.textContent = "";
    loadingMessage.style.display = "none"; // Hide the loading message div
  }
};

const simpleCalculate = (expression) => {
  const tokens = expression.match(/[\d.]+|\+|\-|\*|\/|\%/g);

  if (!tokens || tokens.length % 2 === 0) {
    return undefined; // Invalid expression
  }

  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    if (!isNaN(operand)) {
      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          result /= operand;
          break;
        case "%":
          result %= operand;
          break;
        default:
          return undefined; // Invalid operator
      }
    } else {
      return undefined; // Invalid expression
    }
  }

  return result;
};
