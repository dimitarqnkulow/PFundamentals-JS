function loadingBar(loaded) {

    let precentCount = '%'.repeat(loaded / 10);

    let dotsCount = '.'.repeat(10 - (loaded / 10))
    if (loaded === 100) {

        console.log('100% Complete!');
    } else if (loaded < 100) {

        console.log(`${loaded}% [${precentCount}${dotsCount}]`);
        console.log(`Still loading...`);
    }


}

loadingBar(30);