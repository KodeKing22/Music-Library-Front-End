import axios from "axios";
import React, {useEffect, useState} from "react";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddNewSong from "./Components/AddNewSong/AddNewSong";
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);
  
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/songs/');
     setSongs(response.data);

    console.log(response.data);
    
  }
  useEffect(() =>{
  getAllSongs(); 
    
  }, [])

      async function AddNewSongProperty(newSong){
        let response = await axios.post('http://127.0.0.1:8000/songs/', newSong);
        if(response.status===201){
          await getAllSongs();
          }
        }
      



  return (
    <div className="App">
      <h1>Music Library</h1>
      <DisplayMusic songs={songs} />
      <div>
   
      </div>
      <div>
      <AddNewSong AddNewSongProperty={AddNewSongProperty}/>
      </div>
     <img className="card_img" src="./assets/pexels-matthias-groeneveld-4200747.jpg"/>
    </div>
  );
}

export default App;
