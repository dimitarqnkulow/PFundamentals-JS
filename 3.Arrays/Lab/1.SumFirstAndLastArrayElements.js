function sumArrays(array) {
    let numFirst = array[0];

    let numLast = array[array.length - 1];

    let sum = numFirst + numLast;
    console.log(sum);
}
sumArrays([10, 17, 22, 33]);