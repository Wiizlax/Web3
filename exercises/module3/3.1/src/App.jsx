/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './App.css';

// Composant Loading
const Loading = () => (
  <div>
    <h2>Loading...</h2>
    <p>Please wait while we load the feedback statistics.</p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={positivePercentage.toFixed(2) + '%'} />
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  // Utilisation de useEffect pour simuler le temps de chargement
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Nettoyer le timer
  }, []);

  return (
    <div>
      <h1>Give feedback</h1>
      {loading ? (
        <Loading /> // Affichage du composant Loading si l'état loading est true
      ) : (
        <div>
          <Button handleClick={() => setGood(good + 1)} text="Good" />
          <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
          <Button handleClick={() => setBad(bad + 1)} text="Bad" />
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      )}
    </div>
  );
};

export default App;