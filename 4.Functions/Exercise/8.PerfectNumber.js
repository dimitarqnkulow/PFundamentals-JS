function perfectNumber(number) {

    if (isPerfect(number)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
    function isPerfect(currentNumber) {
        let sum = 0;
        let isPerfect = false;
        for (let i = 0; i < currentNumber; i++) {

            if (currentNumber % i === 0) {

                sum += i;
            }
        }

        if (sum === currentNumber) {
            isPerfect = true;
        }

        return isPerfect;
    }
}

perfectNumber(51);