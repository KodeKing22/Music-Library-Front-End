import axios from "axios";
import React, {useEffect, useState} from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";

// import './App.css';

function App() {

  const [songs, setSongs] = useState([
    {
      "fname": "cash",
      "lname": "myers"
    }
  ]);
  
  useEffect(() =>{
    
      async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/songs/');
         setSongs(response.date);
    
        console.log('app data',response.data);
        
      }
    getAllSongs();
  }, [])

  return (
    <div >
      <DisplayMusic songs={songs} />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
