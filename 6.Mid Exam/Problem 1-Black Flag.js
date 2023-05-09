function blackflag(plunder) {

    let days = Number(plunder[0]);
    let dailyPlunder = Number(plunder[1]);
    let targetPlunder = Number(plunder[2]);

    let sumOfPlunder = 0;

    for (let i = 1; i <= days; i++) {

        sumOfPlunder += dailyPlunder;

        if (i % 3 === 0) {
            sumOfPlunder += dailyPlunder / 2;
        }

        if (i % 5 === 0) {

            sumOfPlunder *= 0.7
        }

    }

    if (sumOfPlunder >= targetPlunder) {

        console.log(`Ahoy! ${sumOfPlunder.toFixed(2)} plunder gained.`);
    } else {
        let colectedPercentage = (sumOfPlunder / targetPlunder) * 100
        console.log(`Collected only ${colectedPercentage.toFixed(2)}% of the plunder.`);
    }


}
blackflag(["10", "20", "380"]);