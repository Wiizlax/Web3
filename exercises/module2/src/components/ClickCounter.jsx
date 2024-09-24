import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ClickCounter({ title, message }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
      {count >= 10 ? <p>{message}</p> : null}
    </div>
  );
}

export default ClickCounter;
