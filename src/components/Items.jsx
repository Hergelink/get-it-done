import React from 'react';

function Items({ list, eraseItem }) {
  return (
    <div id='list-item-container'>
      <ul>
        {list.map((item) => {
          return (
            <div className='item-container'>
              <li key={item.id}>{item.name}</li>
              <button className='erase-button' id={item.id} onClick={eraseItem}>
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Items;
