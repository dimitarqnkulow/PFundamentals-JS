function distinctArray(arr) {

    let uniqueNumbersArray = [];
    let length = arr.length
    for (let i = 0; i < length; i++) {

        if (!uniqueNumbersArray.includes(arr[i])) {

            uniqueNumbersArray.push(arr[i]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])