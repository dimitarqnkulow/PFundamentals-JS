function cats(cats) {
    let catsList = cats.slice();
    cats.forEach(cat => {

        cat = catsList.shift().split(' ')

        let currentName = cat[0];

        let currentAge = cat[1]
        class Cat {
            constructor(currentName, currentAge) {

                this.name = currentName
                this.age = currentAge
            }

            meow() {

                console.log(`${currentName}, age ${currentAge} says Meow`);
            }
        }

        let currentCat = new Cat(currentName, currentAge);

        currentCat.meow();


    });

}

cats(['Mellow 2', 'Tom 5'])
