function dates(arr) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let text = arr[0];
    let dates = pattern.exec(text);

    while (dates) {
        let day = dates.groups['day'];
        let month = dates.groups['month'];
        let year = dates.groups['year']

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        dates = pattern.exec(text);
    }

}

dates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])