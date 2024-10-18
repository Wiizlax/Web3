import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/countersContext";

const Counter = () => {
  const { good, ok, bad, increaseGood, increaseOk, increaseBad, resetAll } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Increment Counters</h1>
      <div>
        <p>Good: {good}</p>
        <button onClick={increaseGood}>Increment Good</button>
      </div>
      <div>
        <p>Ok: {ok}</p>
        <button onClick={increaseOk}>Increment Ok</button>
      </div>
      <div>
        <p>Bad: {bad}</p>
        <button onClick={increaseBad}>Increment Bad</button>
      </div>
      <div>
        <button onClick={resetAll}>Reset All</button>
      </div>
    </div>
  );
};

export default Counter;
