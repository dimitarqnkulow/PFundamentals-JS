let phoneBook = {

    ivaylo: '12312412',
    dimitar: '23616731',
    hristo: '30961841',
    petar: '40987152',
    gergana: '74509613',
};

//check if there is an entry

if (phoneBook.hasOwnProperty('ivaylo')) {

    console.log('Entry found: ' + phoneBook['ivaylo']);
}

if (phoneBook['pesho']) {
    console.log('Entry found: ' + phoneBook['pesho']);
}