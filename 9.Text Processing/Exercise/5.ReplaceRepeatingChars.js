function replace(string) {

    let charsArr = []

    for (let i = 1; i <= string.length; i++) {
        let char = string[i];
        let previousChar = string[i - 1]
        if (char !== previousChar) {
            charsArr.push(string[i - 1]);
        }

    }

    console.log(charsArr.join(''));

}

replace('aaaaabbbbbcdddeeeedssaa')