import React from 'react';

const Song =(props)=>{
    return(
        <div className="song-container">
        <img alt={props.currentSong.name} src={props.currentSong.cover}></img>
        <h2> {props.currentSong.name}</h2>
        <h3> {props.currentSong.artist}</h3>
        </div>

    );
};

export default Song;