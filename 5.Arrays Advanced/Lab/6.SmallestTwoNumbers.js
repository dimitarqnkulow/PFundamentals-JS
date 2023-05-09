function smallestOfTwo(arr) {

    let smallestNumbers = arr.sort((a, b) => a - b).slice(0, 2).join(' ');

    console.log(smallestNumbers);

}

smallestOfTwo([30, 15, 50, 5]);