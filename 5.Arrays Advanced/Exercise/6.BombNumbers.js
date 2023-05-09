function bombNumbers(detonationNumbers, bombNumber) {

    let specialNumber = bombNumber[0];
    let powerOfSpecialNumber = bombNumber[1];
    let sumOfSurvivedNumbers = 0;

    for (let i = 0; i < detonationNumbers.length; i++) {

        if (detonationNumbers[i] === specialNumber) {

            if (powerOfSpecialNumber === 0) {

                if (detonationNumbers[i] === detonationNumbers[i + 1]) {
                    detonationNumbers.splice(i, 2);
                } else {
                    detonationNumbers.splice(i, 1);
                }
            } else {
                detonationNumbers.splice(i, powerOfSpecialNumber + 1);
                detonationNumbers.splice(Math.max(i - powerOfSpecialNumber, 0), powerOfSpecialNumber)
            }
        }

    }

    detonationNumbers.forEach(el => {

        let elInNumber = Number(el);
        sumOfSurvivedNumbers += elInNumber;

    })

    console.log(sumOfSurvivedNumbers);


}
bombNumbers([1, 2, 2, 4, 4, 2, 2, 2, 9],
    [4, 0]);
