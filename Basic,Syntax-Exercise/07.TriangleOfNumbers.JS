function triangleOfNumber(num1) {




    for (let i = 1; i <= num1; i++) {
        let tab = '';
        for (let j = 1; j <= i; j++) {
            tab += `${i} `;
        }
        console.log(tab);
    }

}

triangleOfNumber(5);