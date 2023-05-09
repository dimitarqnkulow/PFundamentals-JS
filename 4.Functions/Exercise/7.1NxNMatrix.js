function matrix(number) {

    let arr = [];

    let rowGenerator = () => {
        let row = '';
        for (let j = 0; j < number; j++) {
            row += `${number} `;

        }
        return row;
    }
    for (let i = 0; i < number; i++) {

        console.log(rowGenerator());

    }
}
matrix(3);