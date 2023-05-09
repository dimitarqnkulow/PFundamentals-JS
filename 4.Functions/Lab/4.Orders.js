function orders(product, count) {
    console.log(totalPrice(product, count))
    function totalPrice(purchasedProduct, numberOfProduct) {

        let totalPrice = 0;
        switch (purchasedProduct) {

            case 'coffee':
                totalPrice = numberOfProduct * 1.50;
                break;

            case 'coke':
                totalPrice = numberOfProduct * 1.40;
                break;

            case 'water':
                totalPrice = numberOfProduct * 1.00;
                break;

            case 'snacks':
                totalPrice = numberOfProduct * 2.00;
                break;

        }
        return totalPrice.toFixed(2);
    }

}

orders("water", 5)