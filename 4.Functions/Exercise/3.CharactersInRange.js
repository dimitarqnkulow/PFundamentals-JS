function charactersInRange(firstChar, secondChar) {

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());

    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArray = [];

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar)

        charArray.push(singleChar);
    }

    console.log(charArray.join(' '))
}

charactersInRange('a', 'd');