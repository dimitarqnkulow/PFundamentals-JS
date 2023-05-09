function occurrences(string) {
    let resultObj = {};

    let allSymbols = string
        .split(' ')
        .map(symbol => symbol.toLowerCase());

    for (let word of allSymbols) {

        if (!resultObj.hasOwnProperty(word)) {
            resultObj[word] = 1;
        } else {
            resultObj[word]++;
        }
    }

    let result = '';
    for (const word of allSymbols) {
        if (resultObj[word] % 2 === 1) {

            result += `${word} `
            delete resultObj[word];
        }

    }

    console.log(result);
}


occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');