import OpinionList from './components/Opinion/OpinionList';
import AddOpinion from './components/Opinion/AddOpinion';

const App = () => {
  return (
    <div>
      <h1>Votez pour une opinion</h1>
      <OpinionList />
      <AddOpinion />
    </div>
  );
};

export default App;
