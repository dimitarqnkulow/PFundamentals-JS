let phoneBookMap = new Map();

phoneBookMap.set('pesho', '0874311249');
phoneBookMap.set('kiril', '0891256197');
phoneBookMap.set('sasho', '0881789695');

console.log(phoneBookMap.get('kiril'));//vzimame stoinosta na kiril(tel nomer);

console.log(phoneBookMap.size);

if (phoneBookMap.has('pesho')) {

    console.log('Pesho is in the house');
}
//iterate keys in map
for (const key of phoneBookMap.keys()) {

    console.log(key);

}
//iterate values in map
for (const value of phoneBookMap.values()) {

    console.log(value);

}
//iterate entries in map

for (const kvp of phoneBookMap.entries()) {



}

//iterate map

for (const kvp of phoneBookMap) {
    console.log(kvp);

}

//iterator with forEach method

phoneBookMap.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
});