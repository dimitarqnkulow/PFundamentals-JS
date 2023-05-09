function oddEvenSum(num) {


    let numberAsString = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    let arrLength = numberAsString.length;

    for (let i = 0; i < arrLength; i++) {

        let singleNumber = Number(numberAsString[i]);
        if (singleNumber % 2 === 0) {

            evenSum += singleNumber;
        } else {

            oddSum += singleNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddEvenSum(1000435);