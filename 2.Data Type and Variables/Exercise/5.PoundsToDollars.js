function poundToDollars(pounds) {

    const dollar = 1.31;
    let poundsInDollars = (pounds * dollar).toFixed(3);

    console.log(poundsInDollars);

}

poundToDollars(80);