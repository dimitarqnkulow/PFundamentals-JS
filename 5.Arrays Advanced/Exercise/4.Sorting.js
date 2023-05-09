function sorting(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let resultArr = [];

    for (let i = 0; i < sortedArray.length; i++) {
        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();


        resultArr.push(lastElement);
        resultArr.push(firstArray)

    }
    resultArr.push(sortedArray.pop());
    resultArr.push(sortedArray.shift());
    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])