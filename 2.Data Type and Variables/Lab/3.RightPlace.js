function rightLetter(string1, letter, string2) {

    let res = string1.replace('_', letter);

    let result = res === string2 ? 'Matched' : 'Not Matched';

    console.log(result)


}
rightLetter('Str_ng', 'i', 'String');