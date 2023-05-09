function occurrences(string) {

    let allSymbols = string
        .split(' ')
        .map(symbol => symbol.toLowerCase());
    let length = allSymbols.length
    let resultObj = {};
    for (let i = 0; i < length; i++) {

        if (!resultObj.hasOwnProperty(allSymbols[i])) {
            resultObj[allSymbols[i]] = []
        }
        resultObj[allSymbols[i]].push(i)
    }

    let sorted = Object.entries(resultObj).sort((a, b) => a[1][0] - b[1][0]);

    let result = '';

    for (const el of sorted) {
        if (el[1].length % 2 !== 0) {

            result += `${el[0]} `
        }

    }

    console.log(result);
}


occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');