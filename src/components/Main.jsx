import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import Items from './Items';

const initialList = [];

function Main() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newItem = list.concat({ name, id: uuidv4() });

    name.length > 0 ? setList(newItem) : alert('Please enter an item!');

    setName('');
    e.target.reset();
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
        <Input
          initialList={initialList}
          value={name}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <Items initialList={initialList} list={list} eraseItem={eraseItem} />
      </div>
    </main>
  );
}

export default Main;
