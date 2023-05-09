function substraction(numbers) {
    let result = 0;
    for (let i = 0; i <= (numbers.length - 1); i++) {

        let num = numbers[i];

        if (num % 2 == 0) {

            result += num;
        } else {

            result -= num;
        }

    }

    console.log(result);

}

substraction([1, 2, 3, 4, 5, 6]);