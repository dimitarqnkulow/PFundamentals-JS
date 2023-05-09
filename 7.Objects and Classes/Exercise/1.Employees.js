function empList(list) {

    let employeesList = {};

    list.forEach(person => {

        employeesList[person] = person.length;

    })


    for (const person in employeesList) {

        console.log(`Name: ${person} -- Personal Number: ${employeesList[person]}`);

    }
}
empList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)