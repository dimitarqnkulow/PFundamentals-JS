function signCheck(numOne, numTwo, numThree) {

    let positiveNegativ = lastCheck(numThree);

    if (positiveNegativ > 0) {

        console.log('Positive');
    } else {

        console.log('Negative');
    }

    function firstCheck(firstNum, secondNum) {
        let checkOne = firstNum * secondNum;

        return checkOne;

    }

    function lastCheck(thirdNumber) {

        let checkTwo = firstCheck(numOne, numTwo) * thirdNumber;

        return checkTwo;
    }


}
signCheck(-5,
    1,
    1
);