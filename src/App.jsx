import axios from "axios";
import React, {useEffect, useState} from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddNewSong from "./Components/AddNewSong/AddNewSong";
// import './App.css';

function App() {

  const [songs, setSongs] = useState([]);
  
  function AddNewSong(songs){

    let tempSearchData = [...songs, songs]

    setSongs(tempSearchData)
  }
  useEffect(() =>{
    
      async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/songs/');
         setSongs(response.data);
    
        console.log(response.data);
        
      }
    getAllSongs();
  }, [])

  return (
    <div >
      <h1>Music Library</h1>
      <DisplayMusic songs={songs} />
      <div>
      <SearchBar songs={songs}/>
      </div>
      <div className='border-box'>
      <AddNewSong AddNewSongProperty={AddNewSong} />
      </div>
    </div>
  );
}

export default App;
