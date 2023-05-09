function convert(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let personToJson = JSON.stringify(person);

    console.log(personToJson);

}

convert('George', 'Jones', 'Brown')