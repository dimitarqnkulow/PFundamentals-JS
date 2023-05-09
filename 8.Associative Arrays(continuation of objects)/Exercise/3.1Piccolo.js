function piccolo(arr) {

    let parkingList = new Map();

    let finalList = arr.map(el => el.split(', '))
    for (let car of finalList) {

        if (car[0] === 'IN') {

            parkingList.set(car[1], car[0]);

        } else if (car[0] === 'OUT') {

            parkingList.delete(car[1]);
        }
    }

    let sortedFinalList = Array.from(parkingList)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let result = '';

    sortedFinalList.forEach(el => {

        result += `${el[0]}\n`
    })
    console.log(result);
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)