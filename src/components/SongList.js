import React, { useState} from 'react';
import {v4} from 'uuid';

const SongList = () => { 
    const [songs, setSongs] = useState([
        { title: 'Back in Blood', id: 1 },
        { title: 'Momma, Made It', id: 2 },
        { title: 'Double Up', id: 3 }
    ]);

    const addSong = () => {
        setSongs([...songs, { title: 'New Song', id: v4() }]);
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                       <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <button onClick={addSong}>Add a Song</button>
        </div>    
    );
}
 
export default SongList;