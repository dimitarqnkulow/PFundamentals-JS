function factorialDivision(firstFactorial, secondFactorial) {

    let factorialDivision = factorial(firstFactorial) / factorial(secondFactorial);


    console.log(factorialDivision.toFixed(2));

    function factorial(number) {
        if (number == 1 || number == 0) {

            return 1;
        } else {

            return number * factorial(number - 1);
        }

    }
}
factorialDivision(1,
    2
);