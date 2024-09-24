/* eslint-disable react/prop-types */
import { useState } from "react";

function ClickCounter({ title, message, hoverMessage }) {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const [hover, setHover] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          setCount((prevCount) => {
            const newCount = prevCount + 1;
            localStorage.setItem("count", JSON.stringify(newCount));
            return newCount;
          });
        }}
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
