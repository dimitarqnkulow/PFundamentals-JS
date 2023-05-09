function rotation(arrToRotate, rotations) {

    for (let i = 0; i < rotations; i++) {
        let numToMove = arrToRotate.shift();
        arrToRotate.push(numToMove)
    }

    console.log(arrToRotate.join(' '));
}

rotation([51, 47, 32, 61, 21], 2)