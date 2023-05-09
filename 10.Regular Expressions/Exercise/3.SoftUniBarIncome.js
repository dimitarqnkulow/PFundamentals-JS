function barIncome(arr) {

    let pattern = /\%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g

    let command = arr.shift();

    let totalIncome = 0;

    while (command !== 'end of shift') {

        let purchaseInfo = pattern.exec(command);
        if (purchaseInfo) {
            let customerName = purchaseInfo.groups['customer'];
            let product = purchaseInfo.groups['product'];
            let totalPrice = Number(purchaseInfo.groups['count']) * Number(purchaseInfo.groups['price'])
            totalIncome += totalPrice;

            console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);

        }
        purchaseInfo = pattern.exec(command);
        command = arr.shift();

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']


)

barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)