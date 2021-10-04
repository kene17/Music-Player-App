import React from "react";
import LibrarySong from "./LibrarySong";
const Library = (props) => {
  return (
    <div className={`library ${props.libraryStatus ? 'active-library' : ''} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {props.songs.map((song) => (
          <LibrarySong
            song={song} //all the songs in the util file
            setCurrentSong={props.setCurrentSong} //a function to change the songs
            songs={props.songs} //used to filer through the list of songs
            id={song.id}
            key={song.id}
            audioRef={props.audioRef}
            isPlaying={props.isPlaying}
            setSongs={props.setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
