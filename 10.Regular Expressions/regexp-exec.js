let pattern = /(\w+)\(\)/g;
let text = 'Reversing a string is one of the most frequently() asked JavaScript question() in the technical round of interview. Interviewers() may ask you to write different ways to reverse() a string, or they may ask() you to reverse a string() without using in-built methods(), or they may even ask you() to reverse a string() using recursion.'

let match = pattern.exec(text);

//run all matches

while (match) {
    console.log(match);
    console.log(`Found ${match[1]} on index ${match.index}`)
    match = pattern.exec(text)
}