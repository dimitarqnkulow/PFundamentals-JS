function conut(pages, pagesPerHour, forDays) {

    let readBook = pages / pagesPerHour;
    let requierdHours = readBook / forDays;

    console.log(requierdHours)

}
conut(212, 20, 2);