/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const OpinionsContext = createContext(null);

const OpinionsProvider = ({ children }) => {
  const [opinions, setOpinions] = useState([]);

  const addOpinion = (text) => {
    const newOpinion = { id: uuidv4(), text, votes: 1 };
    setOpinions((prevOpinions) =>
      [...prevOpinions, newOpinion].sort((a, b) => b.votes - a.votes)
    );
  };

  const voteOpinion = (id) => {
    setOpinions((prevOpinions) => {
      const updatedOpinions = prevOpinions.map((opinion) =>
        opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
      );
      return updatedOpinions.sort((a, b) => b.votes - a.votes);
    });
  };

  const exposedValue = {
    opinions,
    addOpinion,
    voteOpinion,
  };

  return (
    <OpinionsContext.Provider value={exposedValue}>
        {children}
    </OpinionsContext.Provider>
  );
};

export {
    OpinionsContext,
    OpinionsProvider
}
