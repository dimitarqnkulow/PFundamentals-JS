function sumDigits(number) {
    let numberString = number.toString();
    let sum = 0;
    let numberDigits = numberString.length
    for (let i = 0; i < numberDigits; i++) {

        let currentDigit = Number(numberString[i]);
        sum += currentDigit;

    }
    console.log(sum);

}
sumDigits(245678);