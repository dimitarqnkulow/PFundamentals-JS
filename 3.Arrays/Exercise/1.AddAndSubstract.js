function addAndSubstract(arr) {
    let resultArray = [];
    let arrSum = 0;
    let resultArraySum = 0;
    for (let i = 0; i < arr.length; i++) {

        let currentNumber = arr[i];

        let even = currentNumber + i;
        let odd = currentNumber - i;
        if (currentNumber % 2 == 0) {
            resultArray.push(even);
        } else {
            resultArray.push(odd);
        }
        arrSum += currentNumber;
        resultArraySum += resultArray[i];
    }
    console.log(resultArray);
    console.log(arrSum);
    console.log(resultArraySum);
}
addAndSubstract([5, 15, 23, 56, 35]);