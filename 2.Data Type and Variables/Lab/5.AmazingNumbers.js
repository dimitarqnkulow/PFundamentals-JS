function amazingNumber(num) {
    let textNum = num.toString();
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < textNum.length; i++) {
        let currentNum = Number(textNum[i]);

        sum += currentNum;

    }
    if (sum % 10 === 9) {

        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`)
    }
}
amazingNumber(999)