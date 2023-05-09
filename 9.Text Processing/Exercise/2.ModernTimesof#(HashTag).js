function hashtag(string) {
    let stringArr = string.split(' ');

    for (const word of stringArr) {
        let specialWords = [];
        if (word.startsWith('#') && word.length > 1) {
            let specialWord = '';
            let isLetter = true;
            for (let i = 1; i < word.length; i++) {

                let char = word[i].toLowerCase();

                if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                    specialWord += char;
                } else {
                    isLetter = false;
                    break;
                }
            }

            if (isLetter) console.log(specialWord);
        }

    }


}

hashtag('Nowadays everyone uses # to tag a #spe1cial word in #socialMedia');