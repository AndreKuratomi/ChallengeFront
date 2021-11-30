import { useState, createContext, useContext } from "react";

import { friends, candidates } from "../../assets/users";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(friends);
  const [candidate, setCandidate] = useState(candidates);

  const addUser = (one) => {
    setUser([...user, one]);
    const newCandidatesList = candidates.filter((elt) => elt.name !== one.name);
    setCandidate(newCandidatesList);
  };

  const removeFriend = (one) => {
    setCandidate([...candidate, one]);
    const newFriendsList = friends.filter((elt) => elt.name !== one.name);
    setUser(newFriendsList);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        candidate,
        addUser,
        removeFriend,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
