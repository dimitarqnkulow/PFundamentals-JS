function cardGame(arr) {

    let result = {};
    for (let hand of arr) {

        let currentHand = hand.split(': ');

        let name = currentHand[0];

        let cards = currentHand[1].split(', ');

        if (!result.hasOwnProperty(name)) {

            result[name] = []
        }

        for (let i = 0; i < cards.length; i++) {

            let currenrCard = cards[i];

            if (!result[name].includes(currenrCard)) {
                result[name].push(currenrCard)
            }

        }
    }


    for (const kvp in result) {

        let sumValues = 0;
        let cardType = 0;
        let cardPower = 0;

        for (const card of result[kvp]) {

            if (card.length < 3) {
                cardPower = card[0];
                cardType = card[1];
                if (cardPower === 'J') {
                    cardPower = 11;
                } else if (cardPower === 'Q') {
                    cardPower = 12;
                } else if (cardPower === 'K') {
                    cardPower = 13;
                } else if (cardPower === 'A') {
                    cardPower = 14;
                }
            } else {
                cardPower = 10;
                cardType = card[2];
            }
            if (cardType === 'S') {

                cardType = 4;
            } else if (cardType === 'H') {

                cardType = 3;
            } else if (cardType === 'D') {

                cardType = 2;
            } else if (cardType === 'C') {

                cardType = 1;
            }

            let value = Number(cardType) * Number(cardPower);
            sumValues += value;
        }


        console.log(`${kvp}: ${sumValues}`);
    }
}


cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);