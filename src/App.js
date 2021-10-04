import React, {useState, useRef} from 'react';
//import styles
import './styles/app.scss'
//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav';
//import util
import data from "./util"
import Library from './components/Library';

function App() {
  //Ref
  const audioRef = useRef(null);//this is how you grab elements in React
  //State 
  const [songs, setSongs]=useState(data());//sets the array of data to songs
  const [currentSong, setCurrentSong] = useState(songs[0]);//grabs the first song of the array of objects
  const [isPlaying, setIsPlaying] = useState(false); //if a song is playing
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration});

  };
  return (
    <div className="App">
    < Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
      currentSong={currentSong} 
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying}
      audioRef={audioRef}
      setSongInfo={setSongInfo}
      songInfo={songInfo}

      />
      <Library 
      songs={songs} 
      setCurrentSong={setCurrentSong} 
      audioRef={audioRef}
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
  

      />
      <audio 
      onTimeUpdate={timeUpdateHandler} 
      onLoadedMetadata={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      >
      </audio>
    </div>
  );
}

export default App;
