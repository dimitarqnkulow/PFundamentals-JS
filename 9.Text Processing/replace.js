let text = 'This is a word and it also is a sentence sentence sentence';

//Replace first occurence
let replaceSentence = text.replace('sentence', 'izrechenie')

console.log(replaceSentence);

//Replace all
let replaceAllSentence = text;

while (replaceAllSentence.indexOf('sentence') >= 0) {

    replaceAllSentence = replaceAllSentence.replace('sentence', 'izrechenie')
}
console.log(replaceAllSentence);