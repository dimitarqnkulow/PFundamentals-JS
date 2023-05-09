function party(arr) {

    let currentGuest = arr.shift();
    let vipList = [];
    let regularList = [];
    while (currentGuest !== 'PARTY') {


        if (!isNaN(currentGuest[0])) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest)
        }


        currentGuest = arr.shift();
    }

    const fullList = vipList.concat(regularList);

    for (const guest of arr) {

        if (fullList.includes(guest)) {

            fullList.splice(fullList.indexOf(guest), 1)
        }
    }
    console.log(fullList.length);
    fullList.forEach(el => console.log(el))

}

party([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)