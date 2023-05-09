function searchForANumber(arr, actions) {

    let searchArr = arr.slice(0, actions[0]).splice(0 + actions[1]);

    let occurTimes = 0;
    searchArr.forEach(element => {

        if (element === actions[2]) {
            occurTimes++;
        }
    })

    console.log(`Number ${actions[2]} occurs ${occurTimes} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)