import React, {useEffect} from "react";

const DisplayMusic = (props) => {

    useEffect(()=> {
        console.log("display msuc" ,props.songs)
    },[])

    
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
                {/* {props.songs.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.release_date}</td>
                            <td>{entry.genre}</td>
                        </tr>
                    )
                })} */}
            </tbody>
        </table>
        

    );
}

export default DisplayMusic;