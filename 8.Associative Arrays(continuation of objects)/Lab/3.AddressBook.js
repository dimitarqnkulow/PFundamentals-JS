function printAdressBook(arr) {

    let adressBook = {};

    for (const adressName of arr) {

        let [name, adress] = adressName.split(':');

        adressBook[name] = adress
    }
    let adressBookEntries = Object.entries(adressBook);
    console.log(adressBook);
    adressBookEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const finalAdess of adressBookEntries) {

        let name = finalAdess[0];
        let adress = finalAdess[1];

        console.log(`${name} -> ${adress}`);
    }
}

printAdressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);