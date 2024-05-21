import React, { useContext, useEffect} from "react";
import noteContext from "../Context/Notes/NoteContext";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";

const YourNotes = (props) => {
  const context = useContext(noteContext);
  const { notes, deleteNote, getAllNotes } = context;

  let navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('token')){
      getAllNotes();
    }else{
      navigate('/login')
    }
    
    //eslint-disable-next-line
  }, []);


  return (
    <div className="container">
      <h1 className="text-center yourNotes-heading">{props.heading}</h1>
      <div className="row">
        <div className="container">
          <h4 className="text-center">
            {notes.length === 0 && 'No Notes Available'}
          </h4>
          </div>
        {notes.map((note) => (
          <div key={note._id} className="col-lg-4 yourNote-card">
            <div className="card my-2">
              <div className="card-body">
                <h4 className="card-title">Title: {note.title}</h4>
                <h4>Description: {note.description}</h4>
                {note.tag ? <h4>Tag: {note.tag}</h4> : ""}
                <div className="d-flex justify-content-between align-items-center mt-2">
                <EditModal keys={note._id} title={note.title} description={note.description} tag={note.tag} id={note._id} height={24} width={24} fill="black"/>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={props.width || "16"}
                    height={props.height || "16"}
                    fill={props.fill || "currentColor"}
                    className={props.className || "bi bi-trash-fill"}
                    viewBox="0 0 16 16"
                    onClick={() => {
                      deleteNote(note._id);
                    }}
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourNotes;
