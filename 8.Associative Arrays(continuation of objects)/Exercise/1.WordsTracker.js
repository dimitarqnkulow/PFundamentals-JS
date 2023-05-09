function tracker(arr) {

    let wordsSearch = arr.shift().split(' ');

    let result = {};

    for (const word of wordsSearch) {
        result[word] = 0;
    }

    for (const word of arr) {
        if (result.hasOwnProperty(word)) {

            result[word]++;
        }
    }

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const key of sorted) {
        console.log(`${key[0]} - ${key[1]}`);
    }
}
tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);