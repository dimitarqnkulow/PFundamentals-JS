function calculateTicket(dayType, age) {
    let ticketPrice = 0;
    switch (dayType) {

        case 'Weekday':
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
                console.log(`${ticketPrice}$`)
            } else if (18 < age && age <= 64) {
                ticketPrice = 18;
                console.log(`${ticketPrice}$`)
            } else if (64 < age && age <= 122) {
                ticketPrice = 12;
                console.log(`${ticketPrice}$`)
            } else {
                console.log('Error!')
                break;
            }

            break;

        case 'Weekend':
            if (0 <= age && age <= 18) {
                ticketPrice = 15;
                console.log(`${ticketPrice}$`)
            } else if (18 < age && age <= 64) {
                ticketPrice = 20;
                console.log(`${ticketPrice}$`)
            } else if (64 < age && age <= 122) {
                ticketPrice = 15;
                console.log(`${ticketPrice}$`)
            } else {
                console.log('Error!')
                break;
            }
            break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                ticketPrice = 5;
                console.log(`${ticketPrice}$`)
            } else if (18 < age && age <= 64) {
                ticketPrice = 12;
                console.log(`${ticketPrice}$`)
            } else if (64 < age && age <= 122) {
                ticketPrice = 10;
                console.log(`${ticketPrice}$`)
            } else {
                console.log('Error!')
                break;
            }
            break;
    }


}

calculateTicket('Weekday', 42);