// Enter a number
// display number on screen

// Enter an operator
// if multiple operators are chosen -> choose newest
// store number previously shown on screen

// Enter a number
// display number on screen

// Equals




// On each click add the number to the value

// If the click is = 0 and the existing number is = 0 ignore it

// Storage

// 


const calculator = {
    _currentValue: '',
    _storedValue: '',
    _currentOperation: '',

    set currentValue(newValue) {
        this._currentValue += newValue;
    },

    set storedValue(newValue) {
        this._storedValue = newValue;
    },

    set currentOperation(newValue) {
        this._currentOperation = newValue;
    },

    get currentValue() {
        return this._currentValue;
    },

    get storedValue() {
        return this._storedValue;
    },

    get currentOperation() {
        return this._currentOperation;
    },

    currentToStored() {
        this.storedValue = this.currentValue;
    },

    addition(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    },

    subtraction(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    },

    multiplication(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    },

    division(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

}

const screen = document.getElementById('screen');

const eventListeners = () => {
    document.getElementById('calculator').addEventListener('click', function (event) {
        if (event.target.dataset.number) {
            calculator.currentValue = event.target.textContent;
            screen.textContent = calculator.currentValue;
        } else if (event.target.dataset.operator) {
            calculator.currentOperation = event.target.dataset.operator;
            screen.textContent = event.target.textContent;
            calculator.storedValue = calculator.currentValue;
            calculator._currentValue = '';
        } else if (event.target.dataset.equals) {
            switch (calculator.currentOperation) {
                case 'multiply':
                    screen.textContent = calculator.multiplication(calculator.storedValue, calculator.currentValue);
                    break;
                case 'divide':
                    screen.textContent = calculator.division(calculator.storedValue, calculator.currentValue);
                    break;
                case 'add':
                    screen.textContent = calculator.addition(calculator.storedValue, calculator.currentValue);
                    break;
                case 'subtract':
                    screen.textContent = calculator.subtraction(calculator.storedValue, calculator.currentValue);
                    break;
            }
        } else if (event.target.dataset.clear) {
            calculator._currentValue = '';
            calculator._storedValue = '';
            screen.textContent = '0';
        }
    })
};



eventListeners()