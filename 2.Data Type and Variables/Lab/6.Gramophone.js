function song(band, album, song) {
    let rotation = 2.5;
    let songLength = Number((album.length * band.length) * song.length / 2)

    let countRotations = Math.ceil(songLength / 2.5)

    console.log(`The plate was rotated ${countRotations} times.`)
}

song('Black Sabbath', 'Paranoid', 'War Pigs');