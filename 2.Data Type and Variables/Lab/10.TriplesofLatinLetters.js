function tripleLetter(num) {
    let char1;
    let char2;
    let char3;
    for (let i = 0; i < num; i++) {
        char1 = String.fromCharCode(97 + i);
        for (let z = 0; z < num; z++) {
            char2 = String.fromCharCode(97 + z);
            for (let x = 0; x < num; x++) {
                char3 = String.fromCharCode(97 + x);
                console.log(`${char1}${char2}${char3}`)
            }
        }
    }

}
tripleLetter(3);