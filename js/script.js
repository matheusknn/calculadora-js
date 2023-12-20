const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperationText = document.querySelector('[data-previous-operation]');
const currentOperationText = document.querySelector('[data-current-operation]');

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.clear();
  }
  calculate() {
    let result;
    const previousOperandFloat = parseFloat(this.previousOperand);
    const currentOperandFloat = parseFloat(this.currentOperand);
  }
  choseOperation(operation) {
    if (this.previousOperand !== '') {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = `${this.currentOperand} ${this.operation}`;
    this.currentOperand = '';
  }
  appendNumber(number) {
    if (this.currentOperand.includes('.') && number === '.') return;
    this.currentOperand = `${this.currentOperand}${number.toString()}`
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  updateDisplay() {
    this.previousOperationText.innerText = this.previousOperand;
    this.currentOperationText.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(previousOperationText, currentOperationText);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener('click', () => {
    calculator.choseOperation(operationButton.innerText);
    calculator.updateDisplay();
  })
})