class Dog {
    constructor(dogName, dogBreed) {
        this.name = dogName;
        this.breed = dogBreed;
    }

    bark() {
        console.log(`${this.name}: Wau Wau`);
    }

}

let firstDog = new Dog('Barki', 'Pitbull');
let secondDog = new Dog('Liza', 'Nemska ovcharka');

console.log(firstDog);
console.log(secondDog);

firstDog.bark();
secondDog.bark(); 