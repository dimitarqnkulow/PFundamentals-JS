//Function invoking

//partOfCode();//Mojem da izvikame function predi da q suzdadem|| Naricha se function hoisting
//Function declaration

function partOfCode() {

    console.log('Function declaration');
}

//Function expression

let partCode = function () {

    console.log('Function expression');
}
//Function calls inside a function
function main() {

    partOfCode();
    partCode();
}
//Function invoking

main();
partOfCode();
partCode();