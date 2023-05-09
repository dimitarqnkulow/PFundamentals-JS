function negativePositive(stringNumber) {

    let numbers = [];
    for (const element of stringNumber) {

        let number = Number(element);
        if (number < 0) {

            numbers.unshift(number);
        } else {

            numbers.push(number);
        }
    }

    for (const number of numbers) {
        console.log(number);
    }

}
negativePositive(['7', '-2', '8', '9']);
negativePositive(['3', '-2', '0', '-1']);