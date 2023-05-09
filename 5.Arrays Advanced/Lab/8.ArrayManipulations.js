function arrManipulation(commands) {

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < commands.length; i++) {


        let [command, firstNumber, secondNumber] = commands[i].split(' ');

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case 'Add':
                arr.push(firstNumber);
                break;

            case 'Remove':
                arr = arr.filter(x => x !== firstNumber)

                break;
            case 'RemoveAt':
                arr.splice(firstNumber, 1);
                break;
            case 'Insert':
                arr.splice(secondNumber, 0, firstNumber)
                break;
        }


    }
    console.log(arr.join(' '));

}

arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)