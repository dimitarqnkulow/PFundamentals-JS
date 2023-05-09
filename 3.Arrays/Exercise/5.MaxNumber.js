function maxNumber(topNum) {

    let result = []
    let arrLength = topNum.length
    let isTop = true;
    for (let i = 0; i < arrLength; i++) {
        let currentNumber = topNum[i];
        isTop = true;
        for (let z = i + 1; z < arrLength; z++) {
            let rightNums = topNum[z];
            if (currentNumber > rightNums) {
                isTop = true;

            } else {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            result.push(currentNumber)
        }

    }
    console.log(result.join(' '))
}
maxNumber([27, 19, 42, 2, 13, 45, 48])