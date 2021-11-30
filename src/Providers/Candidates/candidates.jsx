import { useState, createContext, useContext } from "react";

import landscape1 from "../../assets/landscape1.jpeg";
import landscape2 from "../../assets/landscape2.jpeg";
import landscape3 from "../../assets/landscape3.jpeg";

import random_candidate1 from "../../assets/random_candidate1.jpg";
import random_candidate2 from "../../assets/random_candidate2.jpg";
import random_candidate3 from "../../assets/random_candidate3.jpg";
import random_candidate4 from "../../assets/random_candidate4.jpg";
import random_candidate5 from "../../assets/random_candidate5.jpg";

const CandidatesContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    {
      name: "Romeu",
      selfie: random_candidate1,
      personalFeed: landscape3,
      postName: "some_landscape",
    },
    {
      name: "Boris",
      selfie: random_candidate2,
      personalFeed: landscape3,
      postName: "some_landscape",
    },
    {
      name: "Yuka",
      selfie: random_candidate3,
      personalFeed: landscape3,
      postName: "some_landscape",
    },
    {
      name: "Ynje",
      selfie: random_candidate4,
      personalFeed: landscape3,
      postName: "some_landscape",
    },
    {
      name: "Eloa",
      selfie: random_candidate5,
      personalFeed: landscape3,
      postName: "some_landscape",
    },
  ]);

  const addCandidate = (one) => {
    setCandidates([...candidates, one]);
  };

  const removeCandidate = (one) => {
    const newCandidatessList = candidates.filter(
      (elt) => elt.name !== one.name
    );
    setCandidates(newCandidatessList);
  };
  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        setCandidates,
        addCandidate,
        removeCandidate,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export const useCandidates = () => useContext(CandidatesContext);
