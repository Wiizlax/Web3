/* eslint-disable react/prop-types */
import { useState } from "react";

function ClickCounter({ title, message, hoverMessage }) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => setCount(count + 1)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Count is {count}
        {hover ? <p>{hoverMessage}</p> : null}
      </button>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
}

export default ClickCounter;
