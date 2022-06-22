import React from "react";

const DisplayMusic = (songs) => {
   
    return (
    
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {songs.songs.map((song, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        

    );
}

export default DisplayMusic;