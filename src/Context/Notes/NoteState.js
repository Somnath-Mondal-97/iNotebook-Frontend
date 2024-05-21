import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getAllNotes = async () => {
    const url = host + `/api/notes/fetchAllNotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  //Add a note
  const addNote = async ({ title, description, tag }) => {
    console.log("Type of notes:", typeof notes); // Check the type of notes
    const url = host + `/api/notes/addNote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json)
  };

  // Delete a note
  const deleteNote = async (id) => {
    const url = host + `/api/notes/deleteNote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      }
    });
    const json = await response.json()
    console.log(json)
    getAllNotes()
  };
  
  // Update a note
const updateNote = async (id, title, description, tag) => {
  const url = host + `/api/notes/updateNote/${id}`;
  console.log(id)
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token'),
    },
    body: JSON.stringify({ title, description, tag }),
  });
  const updatedNote = await response.json();
  
  // Update state based on the updated note
  setNotes(prevNotes => {
    return prevNotes.map(note => {
      if (note._id === id) {
        return {
          ...note,
          title: updatedNote.title,
          description: updatedNote.description,
          tag: updatedNote.tag
        };
      }
      return note;
    });
  });
};

  return (
    <noteContext.Provider value={{ notes,addNote,updateNote,deleteNote, getAllNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
