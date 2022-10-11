import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [];

function Main() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    const newItem = list.concat({ name, id: uuidv4() });

    name.length > 0 ? setList(newItem) : alert('Please enter an item!');

    setName('');
  };

  const eraseItem = (e) => {
    const deleteId = e.target.id;

    setList((x) => {
      return list.filter((x) => x.id !== deleteId);
    });
  };



  return (
    <main>
      <div id='main-container'>
        <div id='input-div'>
          <p>Add your to-do items below:</p>
          <input type='text' value={name} onChange={handleChange} />
          <button type='button' onClick={handleClick}>
            +Add
          </button>
        </div>

        <div id='list-item-container'>
          <ul>
            {list.map((item) => {
              return (
                <div className='item-container'>
                  <li key={item.id} >
                    {item.name}
                  
                  </li>
                  <button
                      className='erase-button'
                      id={item.id}
                      onClick={eraseItem}
                    >
                      X
                    </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Main;
