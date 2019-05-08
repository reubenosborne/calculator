// Initial draft - the happy path - was peer coded with David Brown
// All other functionality and styling was individual

const calculator = {
    _currentValue: '',
    _storedValue: '',
    _currentOperation: '',
    result: '',

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

    math: {

        addition(num1, num2) {
            return parseFloat(num1) + parseFloat(num2);
        },

        subtraction(num1, num2) {
            return parseFloat(num1) - parseFloat(num2);
        },

        multiplication(num1, num2) {
            return parseFloat(num1) * parseFloat(num2);
        },

        division(num1, num2) {
            return parseFloat(num1) / parseFloat(num2);
        },
    },

    clear: {

        currentValue() {
            calculator._currentValue = '';
        },

        storedValue() {
            calculator._storedValue = '';
        },

        storedResult() {
            if (calculator.result) { delete calculator.result }
        }
    },

    store: {

        currentValue() {
            calculator.storedValue = calculator.currentValue;
        },

        currentOperator() {
            calculator.currentOperation = event.target.dataset.operator;
        }

    },

    screen: {

        display(value) {
            screen.textContent = value;
        },

        clear() {
            screen.textContent = '0';
        }
    }
}

const calc = document.getElementById('calculator');
const screen = document.getElementById('screen');

const eventListeners = () => {
    calc.addEventListener('click', function (event) {

        let type = event.target.dataset.type;
        let target = event.target.textContent;

        switch (type) {

            case 'number':
                // Prevent leading zeros
                if (target === '0' && screen.textContent === '0') { return; }
                // Set current value
                calculator.currentValue = target;
                calculator.screen.display(calculator.currentValue);
                break;

            case 'operator':
                calculator.store.currentOperator();
                calculator.screen.display(target);
                calculator.store.currentValue();
                calculator.clear.currentValue();
                break;

            case 'equals':
                // Escape if there's not enough integers to perform function
                if (!calculator._storedValue) { return }

                // Store the previous result to perform calculations on if there are more operations
                if (calculator.result) { calculator.storedValue = calculator.result }

                // Choose operator and apply math
                switch (calculator.currentOperation) {

                    case 'multiply':
                        calculator.result = calculator.math.multiplication(calculator.storedValue, calculator.currentValue);
                        calculator.screen.display(calculator.result);
                        break;

                    case 'divide':
                        calculator.result = calculator.math.division(calculator.storedValue, calculator.currentValue);
                        calculator.screen.display(calculator.result);
                        break;

                    case 'add':
                        calculator.result = calculator.math.addition(calculator.storedValue, calculator.currentValue);
                        calculator.screen.display(calculator.result);
                        break;

                    case 'subtract':
                        calculator.result = calculator.math.subtraction(calculator.storedValue, calculator.currentValue);
                        calculator.screen.display(calculator.result);
                        break;
                }
                break;

            case 'clear':
                // Clear current value, stored value, stored result and clear screen
                calculator.clear.currentValue();
                calculator.clear.storedValue();
                calculator.screen.clear();
                calculator.clear.storedResult();
                break;

            case 'decimal':
                // Prevent multiple decimals
                if (calculator.currentValue.includes('.')) { return }
                // Add decimal point
                calculator.currentValue = '.';
                calculator.screen.display(calculator.currentValue);
                break;
        }
    })
};



eventListeners()
