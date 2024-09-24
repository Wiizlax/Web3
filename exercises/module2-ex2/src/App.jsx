import './App.css';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <div className="App">
      <h1>Boîtes de couleur</h1>
      <div style={{ display: "flex" }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </div>
  );
}

export default App;
