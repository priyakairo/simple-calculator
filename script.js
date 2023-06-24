var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var value = this.getAttribute('data-value');

    if (value == '+') {
      operator = '+';
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
    } 
    else if (value == '-') {
      operator = '-';
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
    }
    else if (value == '*') {
      operator = '*';
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
    }
    else if (value == '/') {
      operator = '/';
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
    }
    else if (value == '%') {
      operator = '%';
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
    }
    else if (value == '=') {
      operand2 = parseFloat(display.textContent);
      display.innerText = calculate(operand1, operand2, operator);
      operand1 = parseFloat(display.textContent);
      operand2 = null;
      operator = null;
    } 
    else if (value == 'AC') {
      operand1 = 0;
      operand2 = null;
      operator = null;
      display.innerText = '';
    }
    else {
      display.innerText += value;
    }
  });
}

function calculate(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    case '%':
      return operand1 % operand2;
    default:
      return '';
  }
}
