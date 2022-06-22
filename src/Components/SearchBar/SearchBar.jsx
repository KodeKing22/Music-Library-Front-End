import React, { useState, useEffect } from 'react';


const SearchBar = (songs) => {
    
    const [songs, setSearch] = useState([]);

    useEffect(() => {
        let tempSearchData = songs.songs.filter(entry => {
            return [entry.title, entry.artist, entry.album, entry, entry.release_date, entry.genre];
        });
        setSearch(tempSearchData);
    }, [])

    return({


})

}

export default SearchBar