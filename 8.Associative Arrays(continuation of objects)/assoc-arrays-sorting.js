let phoneBook = {

    ivaylo: '12312412',
    dimitar: '23616731',
    hristo: '30961841',
    petar: '40987152',
    gergana: '74509613',
};


//convert associative array to normal array
let phoneBookEntries = Object.entries(phoneBook)
//sort the array
phoneBookEntries.sort((a, b) => a[0].localeCompare(b[0]))

//optional: convert back to associative array
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);

console.log(sortedPhoneBook);