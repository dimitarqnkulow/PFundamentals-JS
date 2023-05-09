function houseParty(arr) {

    let geustsArr = [];

    for (const guest of arr) {

        let command = guest.split(' ');

        let name = command[0];

        if (command.length === 3) {
            if (geustsArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                geustsArr.push(name);
            }
        } else {
            if (!geustsArr.includes(name)) {
                console.log((`${name} is not in the list!`));
            } else {
                let index = geustsArr.indexOf(name);
                geustsArr.splice(index, 1);
            }
        }
    }
    console.log(geustsArr.join('\n'));

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)