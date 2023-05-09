function shoppingList(arr) {

    let initialList = arr.shift().split('!');


    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ')
        if (arr[i] === 'Go Shopping!') {

            break;
        }
        else {
            switch (command[0]) {

                case 'Urgent':
                    if (initialList.includes(command[1])) {
                        continue;
                    } else {

                        initialList.unshift(command[1]);
                    }
                    break;

                case 'Unnecessary':
                    if (!initialList.includes(command[1])) {
                        continue;
                    } else {
                        initialList = initialList.filter(x => x !== command[1]);
                    }
                    break;
                case 'Correct':
                    if (!initialList.includes(command[1])) {
                        continue;
                    } else {
                        initialList.splice(initialList.indexOf(command[1]), 1, command[2]);

                    }

                    break;

                case 'Rearrange':
                    if (!initialList.includes(command[1])) {
                        continue;
                    } else {
                        initialList.splice(initialList.indexOf(command[1]), 1)

                        initialList.pop(command[1]);

                    }


                    break;
            }
        }


    }
    console.log(initialList.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",

    "Urgent Tomatoes",

    "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Grapes",

    "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])
