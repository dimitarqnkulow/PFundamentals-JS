function towns(listTowns) {

    let townCoordinates = {};

    for (const line of listTowns) {

        let [townName, latitude, longitude] = line.split(' | ')

        townCoordinates.town = townName;
        townCoordinates.latitude = Number(latitude).toFixed(2);
        townCoordinates.longitude = Number(longitude).toFixed(2);

        console.log(townCoordinates);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)