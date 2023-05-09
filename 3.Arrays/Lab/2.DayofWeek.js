function dayWeek(dayNum) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (dayNum >= 1 && dayNum <= 7) {
        console.log(day[dayNum - 1]);
    } else {
        console.log("Invalid day!");
    }
}
dayWeek([11]) 