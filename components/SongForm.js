import { useState } from "react";
import { nanoid } from "nanoid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SongForm(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSong = {
      title: title,
      artist: artist,
      played: false,
      id: nanoid(),
    };
    props.addSong(newSong);
    setTitle("");
    setArtist("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Add a new task.."
          variant="outlined"
          onChange={handleTitleChange}
          value={title}
        />
        <Button type="submit" variant="contained" color="success">
          Add
        </Button>
      </form>
    </div>
  );
}
