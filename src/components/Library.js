import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  setWobble,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div className="library-head">
        <h2>Library</h2>
        <FontAwesomeIcon
          onClick={() => setLibraryStatus(!libraryStatus)}
          className="icon"
          icon={faTimes}
        />
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            songs={songs}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
            song={song}
            id={song.id}
            key={song.id}
            setWobble={setWobble}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
