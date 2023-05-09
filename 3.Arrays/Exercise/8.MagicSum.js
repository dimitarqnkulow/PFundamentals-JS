function magicSum(arr, sumNumber) {
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let result = [];
        let num = arr[i];

        let sum = 0;
        for (let z = i + 1; z < arrLength; z++) {
            let nextNum = arr[z];
            sum = num + nextNum;
            if (sum === sumNumber) {
                // result.push(num, nextNum)
                // console.log(result.join(' ')); //dava greshka na test 4
                console.log(`${num} ${nextNum}`)
            }
        }

    }
}
magicSum([19, 23, 6, 2, 1, 7], 8);
