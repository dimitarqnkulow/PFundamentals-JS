function addSubstract(firstInt, secondInt, thirdInt) {

    // function addSubstract(firstInt, secondInt, thirdInt) {

    //     let result = add(firstInt, secondInt) - thirdInt;
    //     function add(firstInt, secondInt) {
    
    //         return firstInt + secondInt;
    //     }
    //     console.log(result);
    // }
    function add(a, b) {

        let sum = a + b;
        return sum;
    }

    let sumOfTwo = add(firstInt, secondInt);

    function substract(sumOfTwo, lastNum) {

        return sumOfTwo - lastNum;
    }

    let result = substract(sumOfTwo, thirdInt)
    console.log(result);
}

addSubstract(23, 6, 10);
