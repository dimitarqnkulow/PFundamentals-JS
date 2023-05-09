function vacation(people, groupType, weekDay) {

    let priceVacation = 0;
    let totalPrice = 0;

    switch (groupType) {

        case "Students":

            if (weekDay === "Friday") {
                priceVacation = 8.45;
                totalPrice = people * priceVacation;
            } else if (weekDay === "Saturday") {
                priceVacation = 9.80;
                totalPrice = people * priceVacation;
            } else if (weekDay === "Sunday") {
                priceVacation = 10.46;
                totalPrice = people * priceVacation;
            }
            if (people >= 30) {
                totalPrice = totalPrice * 0.85
                console.log(`Total price: ${totalPrice.toFixed(2)}`)
            } else {
                console.log(`Total price: ${totalPrice.toFixed(2)}`)
            }
            break;
        case "Business":
            if (weekDay === "Friday") {
                priceVacation = 10.90;
                totalPrice = people * priceVacation;
            } else if (weekDay === "Saturday") {
                priceVacation = 15.60;
                totalPrice = people * priceVacation;
            } else if (weekDay === "Sunday") {
                priceVacation = 16;
                totalPrice = people * priceVacation;
            }
            if (people >= 100) {
                totalPrice -= 10 * priceVacation;
                console.log(`Total price: ${totalPrice.toFixed(2)}`)
            } else {
                console.log(`Total price: ${totalPrice.toFixed(2)}`)
            }
            break;
        case "Regular":
            if (weekDay === "Friday") {
                priceVacation = 15;
                totalPrice = people * priceVacation;
            } else if (weekDay === "Saturday") {
                priceVacation = 20;
                totalPrice = people * priceVacation;
            } else if (weekDay === "Sunday") {
                priceVacation = 22.50;
                totalPrice = people * priceVacation;
            }
            if (people >= 10 && people <= 20) {
                totalPrice = totalPrice * 0.95;
                console.log(`Total price: ${totalPrice.toFixed(2)}`)
            } else {
                console.log(`Total price: ${totalPrice.toFixed(2)}`)
            }
            break;
    }



}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday")