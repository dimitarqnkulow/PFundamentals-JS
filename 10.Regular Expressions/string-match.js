let pattern = /(\w+)\(\)/g;
let text = 'Reversing a string is one of the most frequently() asked JavaScript question() in the technical round of interview. Interviewers() may ask you to write different ways to reverse() a string, or they may ask() you to reverse a string() without using in-built methods(), or they may even ask you() to reverse a string() using recursion.'

let matches = text.match(pattern);

for (const match of matches) {

    console.log(match);
}