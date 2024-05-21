import React, { useContext, useRef, useState } from "react";
import Modal from "react-modal";
import noteContext from "../Context/Notes/NoteContext";
import './Component.css'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    zIndex: "1000",
    width: "600px",
    backgroundColor: "black",
    color: "white",
  },
};

Modal.setAppElement("#root"); // Assuming '#root' is the ID of your root element

const EditModal = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const context = useContext(noteContext);
  const { updateNote } = context;

  const [eTitle, setETitle] = useState(props.title);
  const [eDescription, setEDescription] = useState(props.description);
  const [eTag, setETag] = useState(props.tag);

  const modalRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div key={props.keys}>
      <button onClick={openModal} className="open-modal-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "16"}
          height={props.height || "16"}
          fill={props.fill || "currentColor"}
          className={props.className || "bi bi-pencil-square"}
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={modalRef.current}
      >
        <h2>Update Note</h2>
        <form style={{ textAlign: "right" }}>
          <div className="mt-3 mb-3">
            <label htmlFor="title" className="form-label">
              <h3 className="home-label">Title</h3>
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              name="title"
              value={eTitle}
              onChange={(e) => {
                setETitle(e.target.value);
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
              value={eDescription}
              onChange={(e) => {
                setEDescription(e.target.value);
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
              value={eTag}
              onChange={(e) => {
                setETag(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => updateNote(props.id, eTitle, eDescription, eTag)}
            >
              Update Note
            </button>
          </div>
        </form>
        <button onClick={closeModal} className="d-none">
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditModal;
