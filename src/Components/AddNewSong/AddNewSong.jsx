import React, { useState } from 'react';

const AddNewSong = (songs) => {

        const [title, setTitle] = useState('');
        const [artist, setArtist] = useState('');
        const [album, setAlbum] = useState('');
        const [release_date, setReleaseDate] = useState('');
        const [genre, setGenre] = useState('');

        function handlesumit(event) {
            event.preventDefault();
            let newSong = {
                title: title,
                artist: artist,
                album: album,
                release_date: release_date,
                genre: genre,
            };
            console.log(newSong);
            songs.AddNewSongProperty(newSong)
        }

        return (
            <form onSubmit={handlesumit} className='form-grid'>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Artist</label>
                    <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Album</label>
                    <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Release Date</label>
                    <input type='date' className='form-control' value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Genre</label>
                    <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)} />
                </div>
                <button type='submit' className='btn btn=primary' style={{'margin-top': '1em'}}>Add</button>
            </form>

        );
}
 

export default AddNewSong  ;