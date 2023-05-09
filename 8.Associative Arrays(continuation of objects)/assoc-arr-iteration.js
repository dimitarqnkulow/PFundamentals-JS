let phoneBook = {

    ivaylo: '12312412',
    dimitar: '23616731',
    hristo: '30961841',
    petar: '40987152',
    gergana: '74509613',
}

let phoneBookEntries = Object.entries(phoneBook);

for (const kvp of phoneBookEntries) {

    let name = kvp[0];
    let phone = kvp[1];

    console.log(`${name} -> ${phone}`);
}

// shorter version
for (let kvp of Object.entries(phoneBook)) {

    let [name, phone] = kvp;

    console.log(`${name} -> ${phone}`);
}

