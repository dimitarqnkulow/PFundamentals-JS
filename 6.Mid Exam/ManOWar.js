function war(arr) {
    let pirateShipStatus = arr.shift().split('>').map(Number);

    let warShipStatus = arr.shift().split('>').map(Number);

    let maxHealth = Number(arr.shift());

    let commands = arr.slice();

    let currentArg = commands.shift();

    let repairSectionsCount = 0;

    let warShipExist = true;
    let pirateShipExist = true;

    while (currentArg !== 'Retire') {

        let currentCommand = currentArg.split(" ");

        let section = Number(currentCommand[1]);

        let manipulationNum = Number(currentCommand[2]);

        let secondManipulationNum = Number(currentCommand[3]);

        switch (currentCommand[0]) {

            case 'Fire':
                if (warShipStatus[section]) {
                    if (warShipStatus[section] > maxHealth) {
                        warShipStatus[section] = maxHealth;
                    }
                    warShipStatus[section] -= manipulationNum;
                    if (warShipStatus[section] <= 0) {
                        warShipStatus = false;

                    }

                }


                break;

            case 'Defend':
                let startIndex = section;
                let endIndex = manipulationNum;

                if (pirateShipStatus[startIndex] && pirateShipStatus[endIndex]) {

                    for (startIndex; startIndex <= endIndex; startIndex++) {
                        if (pirateShipStatus[startIndex] > maxHealth) {
                            pirateShipStatus[startIndex] = maxHealth;
                        }
                        pirateShipStatus[startIndex] -= secondManipulationNum;

                        if (pirateShipStatus[section] <= 0) {
                            pirateShipExist = false;
                        }
                    }
                }


                break;

            case 'Repair':

                if (pirateShipStatus[section]) {

                    pirateShipStatus[section] += manipulationNum;
                }

                if (pirateShipStatus[section] > maxHealth) {

                    pirateShipStatus[section] = maxHealth;
                }
                break;

            case 'Status':

                for (let index = 0; index < pirateShipStatus.length; index++) {

                    let precentegesOfMaxHealth = (pirateShipStatus[index] / maxHealth) * 100;

                    if (precentegesOfMaxHealth < 20) {
                        repairSectionsCount += 1;
                    }
                }
                console.log(`${repairSectionsCount} sections need repair.`);
                break;



        }

        if (!warShipExist) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (!pirateShipExist) {
            console.log("You lost! The pirate ship has sunken.");
            break;
        }
        currentArg = commands.shift()

    }


    let sumWarShip = 0;
    let sumPirateShip = 0;

    for (const el of pirateShipStatus) {

        sumPirateShip += el;
    }

    for (const el of warShipStatus) {

        sumWarShip += el;
    }

    if (warShipExist && pirateShipExist) {

        console.log(`Pirate ship status: ${sumPirateShip}\nWarship status: ${sumWarShip}`);
    }

}

war(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
