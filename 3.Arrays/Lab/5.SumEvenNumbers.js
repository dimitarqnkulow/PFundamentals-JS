function sumEvenNubers(array) {
    let result = 0;
    for (let i = 0; i <= (array.length - 1); i++) {

        let stringToNumber = Number(array[i]);
        if (stringToNumber % 2 == 0) {
            result += stringToNumber;
        }
    }
    console.log(result);


}

sumEvenNubers(['1', '2', '3', '4', '5', '6']);