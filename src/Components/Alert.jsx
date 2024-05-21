import React from 'react';

const Alert = (props) => {
  return (
    <div className={`alert alert-${props.class} iNotebook-alert p-2`} role="alert">
        {props.message}
    </div>
  );
}

export default Alert;

