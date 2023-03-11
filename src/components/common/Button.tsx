import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button
        className="btn btn-outline-success"
        type={props.type}
      >
        Search
      </button>
    </>
  );
}

export default Button;
