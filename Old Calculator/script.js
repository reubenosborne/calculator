


// On Button Press //

// If it's a number, add it to a variable

// If it's a function, ignore?

// If the next button pressed is a number, concatenate

// If the next button pressed is a function, execute

// If the next button pressed is a number, add to function forming


/* Steps I can take */

// 1. Have all buttons returning their value in console.log

// 2. Apply logic to returned values


// Do I need a container for the first number, the operator, and the second number?


/* Event Listeners */

// Listen for button press and then:

// If it's a number, wait for a second input

// If the second input is another number then concatenate it to the first.

// Else if the second input is a function then store the first number as a variable and then store the function as a variable too then

// If the third input is another number then wait for any second number input then store it in a variable

// If equals is pressed then return equation.



/* Views */

// Display Number
// If a number is pressed, display it on the HTML page in the calculator display

// Display Result
// If there's a result to display, then display it on the HTML page in the calculator display


/* Clicking all 'buttons' should return their value */

var calc = {
    storage: {
        numbers: [],
        operators: [],
    },
    transform: {
        removeLeadingZeros: function (arr) {
            while (arr[0] == 0) {
                arr.shift();
            }
            return arr;
        },
        stringify: function (arr) {
            return arr.join('');
        },
        getLastOperatorPressed: function (arr) {
            return arr.pop();
        },
    },
    action: {
        operatorPress: function () {
            this.storedNumber1 = parseInt(
                this.stringify(
                    this.removeLeadingZeros(
                        this.storage.numbers)));
            this.numberPressed = [];
        }
        // numberPress: function () {
            // this.chosenOperator = this.transform.getLastOperatorPressed(this.storage.operators);
        // },
        // equals: function () {
        //     var answer = '';
        //     answer += this.firstNumber;
        //     answer += this.firstOperator;
        //     answer += this.firstNumber;
        //     return eval(answer);
        // }
    }
};

var screen = document.querySelector('.screen');

var numbers = document.querySelectorAll('.number');
numbers.forEach(x => {return x.addEventListener('click', function(event){
    calc.storage.numbers.push(event.target.id);
    screen.innerText = calc.transform.removeLeadingZeros(calc.transform.stringify(calc.storage.numbers));
    console.log(calc.storage.numbers);
})
});

var operators = document.querySelector('.operator');
operators.addEventListener('click', function (event) {
    calc.storage.operators.push(event.target.id);
    console.log(calc.storage.operators)
});


// If an operator is pressed and there are stored numbers

// function operatorPressed(){
//     var noZeros = removeLeadingZeros(calc.numbersPressedArray);
//     var stringNum = stringify(noZeros);
//     calc.firstNumber = parseInt(stringNum);
// }




// When a number is pressed

