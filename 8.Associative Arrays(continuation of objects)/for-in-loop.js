let phoneBook = {

    ivaylo: '12312412',
    dimitar: '23616731',
    hristo: '30961841',
    petar: '40987152',
    gergana: '74509613',
}

for (let name in phoneBook) {

    console.log(`${name} -> ${(phoneBook[name])}`);
}
