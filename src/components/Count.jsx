import React, { useState } from 'react';

function Count({ list }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      id='count-div'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {list.length}
      {isHovering && (
        <div id='count-info'>{`You have ${list.length} ${
          list.length == 1 ? 'thing' : 'things'
        } left to do!`}</div>
      )}
    </div>
  );
}

export default Count;
