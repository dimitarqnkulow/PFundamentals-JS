function partyTime(arr) {
    let vipList = [];
    let regularList = [];

    let currentGuest = arr.shift();

    while (currentGuest !== 'PARTY') {

        const isVip = !isNaN(currentGuest[0]);

        if (isVip) {
            vipList.push(currentGuest)
        } else {
            regularList.push(currentGuest)
        }

        currentGuest = arr.shift();
    }
    let allGuests = vipList.concat(regularList);

    for (const guest of arr) {

        allGuests.splice(allGuests.indexOf(guest), 1)
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest))
}

partyTime(['7IK9Yo0h',
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