function train(arr) {
    let passengersInTrain = arr.shift().split(' ').map(Number);//shift ni vrushta string, splita go preobrzuva na masiv i s map minavame po masiva i pravim otdelnite elementi w chisla
    let maxCapacity = Number(arr.shift());

    let length = arr.length

    for (let i = 0; i < length; i++) {
        let currentRow = arr[i].split(' ');


        if (currentRow[0] === 'Add') {
            let newWagonPassengers = Number(currentRow[1])
            passengersInTrain.push(newWagonPassengers);
        } else {
            for (let z = 0; z < passengersInTrain.length; z++) {
                let passengersInCurrentWagon = Number(passengersInTrain[z]);
                if (passengersInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passengersInTrain[z] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log((passengersInTrain.join(' ')));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])