function revealWords(words, text) {

    let wordsArr = words.split(', ');

    for (const word of wordsArr) {

        let match = '*'.repeat(word.length);

        text = text.replace(match, word);
    }

    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'

);