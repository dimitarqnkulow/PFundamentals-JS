function sortByTwoCriteria(arr) {

    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });

    for (let i = 0; i < sortedArr.length; i++) {

        console.log(sortedArr[i]);
    }
}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])