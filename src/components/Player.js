
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  //Ref
  
  //event Handlers
  const playSongHandler = () =>{
    // `current` points to the mounted text input element
    if(props.isPlaying===true){
      props.audioRef.current.pause();
      props.setIsPlaying(false);
    }else{
      props.audioRef.current.play();
      props.setIsPlaying(true);
    }
  };
  
  const getTime = (time) =>{
    return(
      Math.floor(time/ 60) + ":" + ("0" + Math.floor(time % 60 )).slice(-2)
    )

  }
  const dragHandler =(e)=>{
    props.audioRef.current.currentTime = e.target.value;
    props.setSongInfo({...props.songInfo, currentTime: e.target.value})

  };
  //State 
  
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(props.songInfo.currentTime)}</p>
        <input min={0} max={props.songInfo.duration || 0} value={props.songInfo.currentTime} onChange={dragHandler} type="range" />
        <p>{getTime(props.songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={ faAngleLeft} />
        <FontAwesomeIcon onClick = {playSongHandler} className="play" size="2x" icon={props.isPlaying===false ?  faPlay: faPause} />

        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
      
    </div>
  );
};
export default Player;
