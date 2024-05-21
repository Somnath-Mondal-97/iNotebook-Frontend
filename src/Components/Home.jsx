import React, { useContext, useEffect, useState } from "react";
import "./Component.css";
import noteContext from "../Context/Notes/NoteContext";
import Alert from './Alert'
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [button, buttonDisble] = useState(true);

  let navigate = useNavigate()

  const [msg,setMsg] = useState("")
  const [err,setErr] = useState(false)
  const [alertClass,setAlertClass] = useState("")

  useEffect(() => {
    if (description.length > 10 && title.length > 3) {
      buttonDisble(false);
    } else {
      buttonDisble(true);
    }
  }, [description, title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title: title,
      description: description,
      tag: tag,
    });
    setErr(true)
    setMsg("Note Added")
    setAlertClass("primary")
    setTitle("");
    setDescription("");
    setTag("");
    setTimeout(()=>{
      setErr(false)
      navigate('/yourNotes')
    },3000)
  };
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate('/login')
    }
    //eslint-disable-next-line
  },[])
  return (
    <>
    <div className="container-fluid">
      {err && <Alert class={alertClass} message={msg}/>}
    </div>
    <div className="container">
      <h1 className="home-heading">{props.heading}</h1>
      <form style={{ textAlign: "right" }} onSubmit={handleSubmit}>
        <div className="mt-3 mb-3">
          <label htmlFor="title" className="form-label">
            <h3 className="home-label">Title</h3>
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            <h3 className="home-label">Description</h3>
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            maxLength={1000}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            <h3 className="home-label">Tag</h3>
          </label>
          <input
            type="text"
            id="tag"
            className="form-control"
            name="tag"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary" disabled={button}>
            Add Your Note
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Home;
