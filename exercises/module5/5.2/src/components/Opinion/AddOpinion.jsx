import { useState, useContext } from 'react';
import { OpinionsContext } from '../../contexts/OpinionContext';

const AddOpinion = () => {
  const { addOpinion } = useContext(OpinionsContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addOpinion(text);
      setText('');
    }
  };

  return (
    <div>
      <h2>Ajouter une opinion</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Votre opinion"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddOpinion;
