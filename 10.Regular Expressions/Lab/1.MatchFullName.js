function matchName(string) {

    let regexp = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g

    let names = string.match(regexp);

    console.log(names.join(' '));
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")