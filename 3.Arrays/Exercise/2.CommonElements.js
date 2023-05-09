function commonElements(arrOne, arrTwo) {

    for (let i = 0; i < arrOne.length; i++) {

        for (let z = 0; z < arrTwo.length; z++) {
            if (arrOne[i] === arrTwo[z]) {
                console.log(arrOne[i]);
            }
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)