import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Count from './Count';
import Input from './Input';
import Items from './Items';
import eraseSound from '../sounds/erase-button-sound.mp3';
import inputSound from '../sounds/input-sound.mp3';

const initialList = [];

function Main() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');

  const audioAdd = new Audio(inputSound);
  const audioDelete = new Audio(eraseSound);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    audioAdd.play();
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
    audioDelete.play();
  };

  return (
    <main>
      <div id='main-container'>
        {list.length > 0 && <Count list={list} />}
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
