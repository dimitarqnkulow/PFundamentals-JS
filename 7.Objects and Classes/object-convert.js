function objectConvert() {

    let person = {

        name: 'Dimitar',
        age: 24,
        isMale: true,
    };
    //taka imame dve razlichni referencii i kogato promenqmae ediniqt obekt ne promenqme drugiq
    let personTwo = JSON.parse(JSON.stringify(person));
    person['eyeColor'] = `Dark Brown`;
    person['email'] = 'dimitarqnkulow@gmail.com'

    console.log(typeof person);
    console.log(personTwo);
    console.log(person);
}

objectConvert();