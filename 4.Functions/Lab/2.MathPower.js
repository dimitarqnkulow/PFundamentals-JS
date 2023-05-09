function calculate(firstNumber, secondNumber) {

    console.log(powerNumbers(firstNumber, secondNumber));

    function powerNumbers(numberOne, numberTwo) {

        let poweredNumbers = numberOne ** numberTwo;
        return poweredNumbers;
    }


}


calculate(2, 8);