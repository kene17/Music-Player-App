import React from "react";

const LibrarySong = (props) => {
  const songSelectHandler = () => {
      //state.id reps all the songs from the state, whilst props.id reps the song that we clicked on 
    const selectedSong = props.songs.filter((state) => state.id === props.id); //filter returns us an array, also checks if the thing i clicked on equals the id from the state
    props.setCurrentSong(selectedSong[0]);
    //Add Active State
    const newSongs = props.songs.map((song) => {
      if (song.id === props.id) {//id reps the song that we clicked on, song.id reps the song from the state
        return {
          ...song, //keep the rest of the properties like the title, artist name the same
          active: true, //but change the active to true
        };
      }
      else{
          return{
          ...song, 
          active: false
        }
      }
    });
    props.setSongs(newSongs)

    //check if song is playing
    if (props.isPlaying === true) {
      const playPromise = props.audioRef.current.play();
      if (playPromise !== undefined) {
        //if what we clicked on is undefined, we should wait a bit
        playPromise.then((audio) => {
          // this is the wait, when it finally loads up we play it
          props.audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      className={`library-song ${props.song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img alt={props.song.name} src={props.song.cover}></img>
      <div className="song-description">
        <h3> {props.song.name}</h3>
        <h4> {props.song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
