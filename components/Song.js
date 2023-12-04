import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Song(props) {
  const song = props.song;
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(song.title);

  function handleDelete() {
    props.remove(song);
  }

  function handleStatusChange() {
    props.togglePlayed(song);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave() {
    // Save the updated title and exit edit mode
    props.editTitle({ ...song, title: updatedTitle });
    setEditMode(false);
  }

  return (
    <li className="song">
      <div className="song-details">
        {editMode ? (
          <div>
            <TextField
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <Button
              onClick={handleSave}
              variant="contained"
              color="success"
              size="small"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Save
            </Button>
          </div>
        ) : (
          <p>
            <span>
              <Checkbox onChange={handleStatusChange} checked={song.played} />
              {song.title}
            </span>
            <span>{song.artist}</span>
            {song.played && (
              <span>Completed at: {song.completedAt.toLocaleString()}</span>
            )}
            {song.createdAt && (
              <span>Added at: {song.createdAt.toLocaleString()}</span>
            )}
          </p>
        )}
      </div>
      <div style={{ marginTop: "10px" }}>
        {editMode ? null : (
          <Button
            className="removeButton"
            onClick={handleDelete}
            variant="text"
            color="warning"
            startIcon={<DeleteIcon />}
            size="large"
          ></Button>
        )}
        <Button
          className="editButton"
          onClick={handleEdit}
          variant="text"
          color="secondary"
          startIcon={<EditIcon />}
          size="large"
        ></Button>
      </div>
    </li>
  );
}
