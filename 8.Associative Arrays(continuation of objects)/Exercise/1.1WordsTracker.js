function wordsOcc(arr) {

    let words = arr.shift().split(' ');

    let occurrences = {};

    for (const word of words) {

        occurrences[word] = 0;
    }

    for (const word of arr) {
        if (occurrences.hasOwnProperty(word)) {

            occurrences[word]++;
        }
    }

    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (let occ of sorted) {

        console.log((`${occ[0]} - ${occ[1]}`));
    }

}

wordsOcc([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);