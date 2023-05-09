function maxSequenceElements(element) {

    let result = [];
    let arrLength = element.length;
    for (let i = 0; i < arrLength; i++) {

        let currentResult = []
        let num = element[i];

        for (let z = i; z < arrLength; z++) {

            let nextNum = element[z];

            if (num === nextNum) {
                currentResult.push(num)
            } else {
                break;
            }
        }
        if (result.length < currentResult.length) {

            result = currentResult;
        }

    }
    console.log(result.join(' '));

}

maxSequenceElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);