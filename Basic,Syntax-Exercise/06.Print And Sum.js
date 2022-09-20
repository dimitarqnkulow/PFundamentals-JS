function printSum(num1, num2) {
    let tab = " ";
    let sum = 0;
    for (let currentNumber = num1; currentNumber <= num2; currentNumber++) {
        sum += currentNumber;
        tab += `${currentNumber} `
    }
    console.log(tab);
    console.log(`Sum: ${sum}`);
}
printSum(5, 10);