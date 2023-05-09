function printPhoneBook(arr) {

    let phoneBook = {};

    for (const contacts of arr) {

        let [name, phone] = contacts.split(' ');

        // let contactsArr = contacts.split(' ');

        // let name = contactsArr[0];
        // let phone = contactsArr[1];

        // phoneBook[name] = phone;

        phoneBook[name] = phone;

    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }

}

printPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);