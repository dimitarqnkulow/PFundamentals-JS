function furniture(arr) {

    let pattern = /\>{2}(?<name>[A-Za-z]+)<{2}(?<price>\d+\.*\d*)!(?<quantity>\d+)/g

    let totalSpend = 0;
    console.log('Bought furniture:');
    let currentFurniture = pattern.exec(arr);

    while (currentFurniture) {

        if (currentFurniture) {
            let furnitureName = currentFurniture.groups['name'];
            let totalPriceCurrentFurniture = Number(currentFurniture.groups['price']) * Number(currentFurniture.groups['quantity']);
            console.log(furnitureName);
            totalSpend += totalPriceCurrentFurniture;
        }
        currentFurniture = pattern.exec(arr);
    }

    console.log(`Total money spend: ${totalSpend.toFixed(2)}`)


}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)