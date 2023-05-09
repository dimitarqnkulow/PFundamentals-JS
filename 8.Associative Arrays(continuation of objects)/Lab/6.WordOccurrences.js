function wordOccurrences(arr) {

    let wordOccurrence = new Map();

    for (const word of arr) {

        let numberOfTimes = 1;
        if (wordOccurrence.has(word)) {
            numberOfTimes += wordOccurrence.get(word);
        }
        wordOccurrence.set(word, numberOfTimes)

    }
    let sortedWordOccurrence = Array.from(wordOccurrence).sort((a, b) => b[1] - a[1])

    for (const occurrence of sortedWordOccurrence) {

        console.log(`${occurrence[0]} -> ${occurrence[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])