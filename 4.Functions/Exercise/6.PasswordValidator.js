function passwordValidator(password) {

    let digitCounter = 0;
    let isSymbol = false;
    let isDigit;
    let isLetter;

    let length = password.length
    for (let i = 0; i < length; i++) {

        let charNum = password[i].charCodeAt();
        isDigit = charNum >= 48 && charNum <= 57;
        isLetter = charNum >= 65 && charNum <= 90 || charNum >= 97 && charNum <= 122;
        if (isDigit) {

            digitCounter++;
        }
        if (!isDigit && !isLetter) {

            isSymbol = true;
        }

    }

    if (length > 10 || length < 6) {

        console.log('Password must be between 6 and 10 characters');
    }
    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if (!isSymbol && digitCounter >= 2 && length >= 6 && length <= 10) {

        console.log('Password is valid');
    }
}

passwordValidator('MyPass123');