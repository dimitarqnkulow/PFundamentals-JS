function meetings(arr) {

    const meetings = {};

    for (const entry of arr) {

        let [day, name] = entry.split(' ');

        if (meetings[day]) {

            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)