function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let commands = arr.slice();
    let currentCommand = commands.shift();

    while (currentCommand !== 'End') {

        currentCommand = currentCommand.split(' ');
        let indexTarget = Number(currentCommand[1]);
        let manipulationNum = Number(currentCommand[2]);;

        switch (currentCommand[0]) {

            case 'Shoot':
                if (targets[indexTarget]) {

                    targets[indexTarget] -= manipulationNum;
                    if (targets[indexTarget] <= 0) {

                        targets.splice(indexTarget, 1);
                    }
                }
                break;

            case 'Add':
                if (targets[indexTarget]) {

                    targets.splice(indexTarget, 0, manipulationNum)
                } else {
                    console.log('Invalid placement!');
                }
                break;

            case 'Strike':

                const lowerIndex = indexTarget - manipulationNum;
                const uppertIndex = indexTarget + manipulationNum;

                if (targets[lowerIndex && targets[uppertIndex]]) {
                    targets.splice(lowerIndex, manipulationNum * 2 + 1)
                } else {
                    console.log('Strike missed!');
                }
                break;

        }
        currentCommand = commands.shift();
    }

    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])

