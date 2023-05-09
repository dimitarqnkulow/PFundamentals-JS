function listOfProducts(products) {

    let sortedProducts = products.sort();

    let numberInOrder = 1;
    for (const productInOrder of sortedProducts) {
        console.log(`${numberInOrder}.${productInOrder}`);
        numberInOrder++;
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts['Watermelon', 'Banana', 'Apples'];