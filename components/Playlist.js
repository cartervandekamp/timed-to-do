import React, { useState } from "react";
import Song from "./Song";
import SongForm from "./SongForm";

export default function Playlist() {
  const [songs, setSongs] = useState([]);
  const [editTask, setEditTask] = useState(null);

  function addSong(song) {
    const updatedSongs = [...songs, { ...song, createdAt: new Date() }];
    setSongs(updatedSongs);
  }

  function removeSong(track) {
    const updatedSongs = songs.filter((song) => song.id !== track.id);
    setSongs(updatedSongs);
  }

  function togglePlayed(track) {
    const updatedSongs = songs.map((song) => {
      if (song.id === track.id) {
        if (!song.played) {
          // Mark as completed and set completion time
          song.played = true;
          song.completedAt = new Date();
        } else {
          // Mark as incomplete and remove completion time
          song.played = false;
          delete song.completedAt;
        }
      }
      return song;
    });

    setSongs(updatedSongs);
  }

  function handleEditTask(song) {
    setEditTask(song);
  }

  function saveEditedTask(updatedTask) {
    const updatedSongs = songs.map((song) => {
      if (song.id === updatedTask.id) {
        return updatedTask;
      }
      return song;
    });

    setSongs(updatedSongs);
    setEditTask(null);
  }

  return (
    <div>
      <ul>
        {songs.map((song) => (
          <div key={song.id}>
            <Song
              song={song}
              remove={removeSong}
              togglePlayed={togglePlayed}
              editTitle={saveEditedTask}
            />
          </div>
        ))}
      </ul>
      <SongForm addSong={addSong} />
    </div>
  );
}
