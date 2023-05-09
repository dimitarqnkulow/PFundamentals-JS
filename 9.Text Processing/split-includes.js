let text = 'This is a word. and it also is a sentence. sentence sentence';

//split
let sentences = text.split('. ');

console.log(sentences);

//includes
let hasSentence = text.includes('sentence');

console.log(hasSentence);