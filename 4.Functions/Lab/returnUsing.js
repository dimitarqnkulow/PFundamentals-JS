function stepen(base, radix) {

    let result = base ** radix;

    return result;
}
let returnedValue = stepen(2, 8);

console.log('after function call')
console.log('Returned value = ' + returnedValue);

//print function result

console.log(stepen(2, 3));

//return boolean
function pass(grade) {
    return grade >= 3;
}

if (pass(2.9)) {
    console.log('Student passed the exam')
} else {
    console.log('Student didn`t pass the exam');
}