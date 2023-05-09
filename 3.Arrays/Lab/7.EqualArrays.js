function equalArr(arrOne, arrTwo) {
    let sum = 0;
    let indexDiff;

    let isEqual = true;
    for (let i = 0; i <= (arrOne.length - 1); i++) {

        let numOne = Number(arrOne[i]);
        let numTwo = Number(arrTwo[i]);

        if (numOne !== numTwo) {
            indexDiff = i;
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${indexDiff} index`)
            break;
        }
        sum += numTwo;
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArr(['1'], ['10']);