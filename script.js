const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const keys = calculator.querySelectorAll('button');



keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;
    const displayValue = display.value;
    const operatorKeys = ['+', '-', '*', '/'];
    const decimalKey = '.';

    // Clear button
    if (keyValue === 'C') {
      display.value = '';
    }

    // Decimal button
    else if (keyValue === decimalKey) {
      if (!displayValue.includes(decimalKey)) {
        display.value += decimalKey;
      }
    }

    // Operator buttons
    else if (operatorKeys.includes(keyValue)) {
      if (displayValue.slice(-1) === decimalKey) {
        display.value = displayValue.slice(0, -1);
      }

      if (displayValue !== '' && !operatorKeys.includes(displayValue.slice(-1))) {
        display.value += keyValue;
      }
    }

    else if (keyValue === '=') {
        if (displayValue.slice(-1) === decimalKey) {
          display.value = displayValue.slice(0, -1);
        }
  
        if (displayValue !== '' && !operatorKeys.includes(displayValue.slice(-1))) {
          display.value = eval(displayValue);
        }
      }
  
      // Number buttons
      else {
        if (displayValue === '0') {
          display.value = keyValue;
        } else {
          display.value += keyValue;
        }
      }
    });

  });

  
    

  
  
  
  
  
  
  
  
  
  
  