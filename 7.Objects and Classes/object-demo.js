function objectDemo() {

    let person = {

        name: 'Dimitar',
        age: 24,
        isMale: true,
    };
    let personTwo = person;
    person['eyeColor'] = `Dark Brown`;
    person['email'] = 'dimitarqnkulow@gmail.com'
    delete person.name
    console.log(person['email']);
    console.log(person);
    console.log(personTwo);


}


objectDemo();