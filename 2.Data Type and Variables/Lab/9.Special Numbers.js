function specialNum(num) {
    let sum = 0;
    while (num !== 0) {
        num = num % 10;
        sum += num;

        sum = sum / 10;

        console.log(parseInt(sum));
        num--;
    }
}

specialNum(15);