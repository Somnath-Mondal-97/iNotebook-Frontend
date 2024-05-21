import React, { useState } from "react";

const ColorPalletButtons = (props) => {
  const [state, setState] = useState(false);
  const stateChange = () => {
    setState(!state);
  };
  return (
    <div style={{ textAlign: "right" }} className="color-pallet">
      {!state ? (
        <div onClick={stateChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || "16"}
            height={props.height || "16"}
            fill={props.fill || "currentColor"}
            className={props.className || "bi bi-arrow-left-circle-fill"}
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
      ) : (
        <div
          className="color-buttons d-flex"
          style={{ justifyContent: "right", gap: "20px" }}
        >
          <svg
          onClick={stateChange}
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || "16"}
            height={props.height || "16"}
            fill={props.fill || "currentColor"}
            className={props.className || "bi bi-arrow-right-circle-fill"}
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
          <button
            onClick={()=>props.toggleMode('success')}
            className="btn btn-success btn-rounded"
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "15px",
              border: "1px solid black",
            }}
          ></button>
          <button
            onClick={()=>props.toggleMode('danger')}
            className="btn btn-danger btn-rounded"
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "15px",
              border: "1px solid black",
            }}
          ></button>
          <button
            onClick={()=>props.toggleMode('warning')}
            className="btn btn-warning btn-rounded"
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "15px",
              border: "1px solid black",
            }}
          ></button>
        </div>
      )}
    </div>
  );
};

export default ColorPalletButtons;
