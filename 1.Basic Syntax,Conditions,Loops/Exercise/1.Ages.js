function ages(age) {

    if (age >= 0 && age <= 2) {
        console.log('baby')
    } else if (age >= 0 && age <= 13) {
        console.log('child')
    } else if (age >= 0 && age <= 19) {
        console.log('teenager')
    } else if (age >= 0 && age <= 65) {
        console.log('adult')
    } else if (age >= 0 && age >= 66) {
        console.log('elder')
    } else if (age < 0) {
        console.log('out of bounds')
    }
}
ages(13);
ages(2);
ages(-2);