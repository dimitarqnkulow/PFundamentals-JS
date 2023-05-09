function reverse(num, array) {
    // create new array
    let result = [];//create empty array
    for (let i = 0; i < num; i++) {
        //reverse the elemnts
        result[num - 1 - i] = array[i];

    }
    //print
    console.log(result.join(' '));
}

reverse(3, [10, 20, 30, 40, 50])