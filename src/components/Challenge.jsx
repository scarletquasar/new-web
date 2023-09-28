import React, { useState } from 'react';

const Challenge = () => {
  const [a, setA] = useState(2);
  const [b, setB] = useState(2);

  return (
    <div>
      <button onClick={() => console.log({ a }, { b })}> Click me! </button>
    </div>
  );
}

export default Challenge;
