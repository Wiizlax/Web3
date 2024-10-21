import { useContext } from 'react';
import { OpinionsContext } from '../../contexts/OpinionContext';

const OpinionList = () => {
  const { opinions, voteOpinion } = useContext(OpinionsContext);

  return (
    <div>
      <h2>Opinions</h2>
      <ul>
        {opinions.map(opinion => (
          <li key={opinion.id}>
            {opinion.text} - Votes: {opinion.votes}
            <button onClick={() => voteOpinion(opinion.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpinionList;
