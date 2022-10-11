import React from 'react';

function Input({ name, handleChange, handleClick }) {
  return (
    <div id='input-div'>
      <form onSubmit={handleClick}>
        <h3>Add your to-do items below:</h3>
        <input type='text' value={name} onChange={handleChange} />
        <button id='add-button' type='submit'>
          +Add
        </button>
      </form>
    </div>
  );
}

export default Input;
