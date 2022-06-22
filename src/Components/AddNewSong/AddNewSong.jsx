import React, { useState } from 'react';

const AddNewSong = (songs) => {

        const [title, setTitle] = useState('');
        const [artist, setArtist] = useState('');
        const [album, setAlbum] = useState('');
        const [release_date, setReleaseDate] = useState('');
        const [genre, setGenre] = useState('');

        function handlesumit(event) {
            event.preventDefault();
            let newEntry = {
                title: title,
                artist: artist,
                album: album,
                release_date: release_date,
                genre: genre
            };
            console.log(newEntry);
            songs.AddNewSongProperty(newEntry)
        }

        return (
            <form onSubmit={handlesumit} className='form-grid'>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='string' className='form-control' value={title} onChange={(event) => setTitle(event.value)} />
                </div>
                <div className='form-group'>
                    <label>Artist</label>
                    <input type='string' className='form-control' value={artist} onChange={(event) => setArtist(event.value)} />
                </div>
                <div className='form-group'>
                    <label>Album</label>
                    <input type='string' className='form-control' value={album} onChange={(event) => setAlbum(event.value)} />
                </div>
                <div className='form-group'>
                    <label>Release Date</label>
                    <input type='string' className='form-control' value={release_date} onChange={(event) => setReleaseDate(event.value)} />
                </div>
                <div className='form-group'>
                    <label>Genre</label>
                    <input type='string' className='form-control' value={genre} onChange={(event) => setGenre(event.value)} />
                </div>
                <button type='sumbit' className='btn btn=primary' style={{'margin-top': '1em'}}>Add</button>
            </form>

        );
}
 

export default AddNewSong  ;