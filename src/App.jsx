import axios from "axios";
import React, {useEffect, useState} from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";

// import './App.css';

function App() {

  const [songs, setSongs] = useState([]);
  
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
      <h1>Hello</h1>
    </div>
  );
}

export default App;
