function equalSums(arr) {
    let foundI = 'no';

    let arrLength = arr.length

    for (let i = 0; i < arrLength; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {

            leftSum = leftSum + arr[l];
        }
        for (let r = i + 1; r < arrLength; r++) {
            rightSum = rightSum + arr[r];
        }
        if (leftSum === rightSum) {

            foundI = i;
        }
    }
    console.log(foundI)
}

equalSums([1, 2])