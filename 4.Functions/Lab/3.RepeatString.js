function repeatString(text, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
}
let timesRepeated = repeatString("abc", 3);
console.log(timesRepeated);
//////////////////////////
console.log(repeatString("abc", 3));