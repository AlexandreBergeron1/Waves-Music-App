import React, { useState, useRef } from "react";
//Import Styles
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Data
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [wobble, setWobble] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [addFavorite, setAddFavorite] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (repeat) {
      await setCurrentSong(songs[currentIndex % songs.length]);
      if (isPlaying) audioRef.current.play();
    } else {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if (isPlaying) audioRef.current.play();
    }
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        isPlaying={isPlaying}
        currentSong={currentSong}
        wobble={wobble}
        setWobble={setWobble}
      />
      <Player
        songs={songs}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        setRepeat={setRepeat}
        repeat={repeat}
        addFavorite={addFavorite}
        setAddFavorite={setAddFavorite}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        isPlaying={isPlaying}
        setSongs={setSongs}
        setWobble={setWobble}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        onEnded={songEndHandler}
        type="audio/mpeg"
      ></audio>
    </div>
  );
}

export default App;
