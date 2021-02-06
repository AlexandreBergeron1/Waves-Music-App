import React from "react";

const Song = ({ currentSong, isPlaying, wobble }) => {
  function classList(classes) {
    return Object.entries(classes)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
      .join(" ");
  }
  return (
    <div className="song-container">
      <img
        className={classList({
          imageOn: isPlaying,
          imageOff: isPlaying === false,
        })}
        alt={currentSong.name}
        src={currentSong.cover}
        wobble={wobble}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
