function matrix(number) {

    let arr = [];

    for (let i = 0; i < number; i++) {

        let row = '';
        for (let j = 0; j < number; j++) {
            row += `${number} `;

        }
        arr.push(row);

    }

    console.log(arr.join('\n'));
}

matrix(3);