function stringSub(word, text) {

    let searchWord = word;

    let textArr = text.split(' ').map(word => word.toLowerCase());

    let wordIsFound = false;

    for (const word of textArr) {

        if (word === searchWord) {
            console.log(word);
            wordIsFound = true;
            break;
        }
    }

    if (!wordIsFound) {

        console.log(`${word} not found!`);
    }


}

stringSub('javascript',
    'JavaScript is the best programming language'
)