function songs(arr) {

    let numberOfSongs = arr.shift();
    let typeSongs = arr.pop();

    let listOfSongs = [];

    class Song {

        constructor(type, name, time) {

            this.type = type
            this.name = name
            this.time = time
        }


    }

    for (let i = 0; i < numberOfSongs; i++) {

        let [type, name, time] = arr[i].split('_');

        let currentSong = new Song(type, name, time);

        listOfSongs.push(currentSong);
    }
    if (typeSongs === 'all') {

        listOfSongs.forEach(song => {

            console.log(song.name);

        });


    } else {

        let filtered = listOfSongs.filter(song => song.type === typeSongs);

        filtered.forEach(song => { console.log(song.name) });
    }


}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)