function matchNumber(string) {
    let pattern = /\+359([ -])[2]\1\d{3}\1\d{4}\b/g;

    let numbers = string[0].match(pattern);

    console.log(numbers.join(', '));

}

matchNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])