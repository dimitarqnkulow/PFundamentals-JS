function schoolGrades(arr) {

    let studentGrades = new Map();
    for (const string of arr) {

        let tokens = string.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!studentGrades.has(name)) {

            studentGrades.set(name, []);
        }
        for (const grade of grades) {

            studentGrades.get(name).push(grade);

        }
    }

    for (const [key, value] of studentGrades.entries()) {
        let sumOfGrades = 0;
        value.forEach(grade => {
            sumOfGrades += grade;
        });
        let avgGrade = sumOfGrades / value.length;
        studentGrades.set(key, avgGrade)
    }




    let studentGradesEntries = Array.from(studentGrades.entries());

    studentGradesEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, avgGrade] of studentGradesEntries) {

        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6',
    'Tim 4 5']
);