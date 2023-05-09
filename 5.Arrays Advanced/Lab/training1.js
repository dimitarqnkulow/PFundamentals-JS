function training(strings) {

    let siblings = ['mitko', 'nadq', 'elica'];

    let firstSiblings = siblings.slice(0, 2);

    console.log(siblings);
    console.log(`First siblings: ${firstSiblings}`);

    //remove single element of the middle
    let removedSiblings = siblings.splice(1, 2);
    console.log(removedSiblings);
}

training('Mitko', 'Nadq', 'Elica')