import React from 'react';

interface InputProps {
  inputValue: string;
  onInputChange: (text: string) => void;
}

function Input(props: InputProps) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onInputChange(event.target.value);
  }

  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.inputValue}
        onChange={handleInputChange}
      />
    </>
  );
}

export default Input;
