//String searching with indexOf

let text = 'This is a word and it also is a sentence sentence sentence';
let sentenceIndex = text.indexOf('sentence');
console.log(sentenceIndex);

// find second sentence
let secondSentenceIndex = text.indexOf('sentence', sentenceIndex + 1)
console.log(secondSentenceIndex);

//search word that is missing
let missingWordIndex = text.indexOf('Dimitar');//vrushta -1
console.log(missingWordIndex);
// get all indexes
// while (index >= 0) {

//     index = text.indexOf('sentence', index + 1);

//     console.log('Sentence found on' + index + 'position');
// }
//last indexOf

let lastSenteneIndex = text.lastIndexOf('sentence')

console.log(lastSenteneIndex);