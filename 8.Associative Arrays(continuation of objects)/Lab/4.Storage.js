function storage(arr) {

    let storage = new Map();

    for (const items of arr) {

        let [product, price] = items.split(' ');
        price = Number(price);
        if (storage.has(product)) {

            price += storage.get(product);//tova shte dobavi
        }
        storage.set(product, price);

    }

    for (const [product, price] of storage) {

        console.log(`${product} -> ${price}`);
    }


}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)