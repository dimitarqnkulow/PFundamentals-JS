function convert(json) {

    let jsonToObject = JSON.parse(json);

    for (const key in jsonToObject) {

        console.log(`${key}: ${jsonToObject[key]}`);
    }

}

convert(`{ "name": "George", "age": 40, "town": "Sofia" }`)