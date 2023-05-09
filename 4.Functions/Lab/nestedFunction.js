function printCertificate(grade, names) {
    //Get formated grade
    let formatedGrade = formatGrade(grade)
    //Get full name
    let fullName = getFullName(names);
    //Print reult

    if (pass(grade)) {
        printHeader();
        console.log(fullName);
        console.log(formatedGrade);
    } else { }

}

function getFullName(names) {
    return `${names[0]} ${names[1]}`
}
function printHeader() {

    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}

function formatGrade(grade) {
    let gradeWord = '';

    if (grade < 3) {
        gradeWord = 'Fail'
    } else if (grade < 3.5) {
        gradeWord = 'Poor'
    } else if (grade < 4.5) {
        gradeWord = 'Good'
    } else if (grade < 5.5) {
        gradeWord = 'Very good'
    } else {
        gradeWord = 'Excellent'
    }

    if (gradeWord == 'Fail') {
        return (`${gradeWord} (2)`)
    } else {
        return (`${gradeWord} (${grade.toFixed(2)})`)
    }
}

function pass(grade) {
    return grade >= 3;
}

printCertificate(5.25, ['Peter', 'Carter']);