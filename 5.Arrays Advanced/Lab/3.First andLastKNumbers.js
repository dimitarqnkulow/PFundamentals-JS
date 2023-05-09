function firstLast(numbers) {

    let count = numbers.shift();

    let firstElements = numbers.slice(0, count);//zapochvame ot nulev element do count
    let lastElements = numbers.slice(numbers.length - count);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}

firstLast([2, 7, 8, 9]);
firstLast([3, 6, 7, 8, 9]);