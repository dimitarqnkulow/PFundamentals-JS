function numbersSequence(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
        let index = Math.max(sequence.length - k, 0);

        let lastThreeNumbers = sequence.slice(index);

        let sumOfThreeNumbers = 0;

        for (const number of lastThreeNumbers) {

            sumOfThreeNumbers += number;
        }
        sequence.push(sumOfThreeNumbers);
    }
    console.log(sequence.join(' '));

}
numbersSequence(6, 3);