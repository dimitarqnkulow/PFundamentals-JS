function oddOcc(string) {

    let elArr = string
        .split(' ')
        .map(w => w.toLowerCase());

    let repeats = {};

    elArr.forEach(element => {

        if (!repeats.hasOwnProperty(element)) {
            repeats[element] = 1;
        } else {
            repeats[element]++;
        }
    });

    let arrRepeats = Object.entries(repeats);
    let result = ''
    for (const kvp of arrRepeats) {

        if (kvp[1] % 2 === 1) {

            result += `${kvp[0]} `
        }

    }

    console.log(result);


}

oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')