function simpleCalculator(numOne, numTwo, operator) {

    let calculatedNumber = 0;

    switch (operator) {

        case 'multiply':

            function multiply(firstNumber, secondNumber) {

                calculatedNumber = firstNumber * secondNumber;
                return calculatedNumber;
            }
            console.log(multiply(numOne, numTwo));
            break;

        case 'divide':
            function divide(firstNumber, secondNumber) {

                calculatedNumber = firstNumber / secondNumber;
                return calculatedNumber;
            }
            console.log(divide(numOne, numTwo));
            break;

        case 'add':
            function add(firstNumber, secondNumber) {

                calculatedNumber = firstNumber + secondNumber;
                return calculatedNumber;
            }
            console.log(add(numOne, numTwo));
            break;

        case 'subtract':
            function subtract(firstNumber, secondNumber) {

                calculatedNumber = firstNumber - secondNumber;
                return calculatedNumber;
            }
            console.log(subtract(numOne, numTwo));
            break;
    }
}

simpleCalculator(40,
    8,
    'divide'
);

