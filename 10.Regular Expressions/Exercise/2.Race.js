function race(arr) {

    let practicipants = arr
        .shift()
        .split(', ');

    let namePattern = /[A-Za-z]/g
    let distancePattern = /\d/g

    let racersList = {};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 'end of race') {
            let name = arr[i].match(namePattern).join('');
            let distance = arr[i].match(distancePattern).reduce((a, b) => Number(a) + Number(b))
            if (practicipants.includes(name)) {
                if (!racersList.hasOwnProperty(name)) {
                    racersList[name] = distance;
                } else {
                    racersList[name] += distance;
                }
            }
        } else {
            break;
        }
    }
    let sortedRacersList = Object.entries(racersList).sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${sortedRacersList[0][0]}`)
    console.log(`2nd place: ${sortedRacersList[1][0]}`)
    console.log(`3rd place: ${sortedRacersList[2][0]}`)
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);