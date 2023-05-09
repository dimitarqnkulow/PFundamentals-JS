function storeProvision(availabel, delivery) {

    const storedProduct = {};
    const availabelLength = availabel.length;
    const deliveryLength = delivery.length;

    for (let i = 0; i < availabelLength; i += 2) {
        const currentProduct = availabel[i];
        storedProduct[currentProduct] = Number(availabel[i + 1]);
    }
    for (let z = 0; z < deliveryLength; z += 2) {
        const currentProduct = delivery[z];
        if (!storedProduct.hasOwnProperty(currentProduct)) {

            storedProduct[currentProduct] = 0;
        }
        storedProduct[currentProduct] += Number(delivery[z + 1]);
    }

    for (const product in storedProduct) {

        console.log((`${product} -> ${storedProduct[product]}`));
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);