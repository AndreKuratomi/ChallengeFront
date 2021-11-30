import { useState, createContext, useContext } from "react";

import random_person1 from "../../assets/random_person1.jpg";
import random_person2 from "../../assets/random_person2.jpg";
import random_person3 from "../../assets/random_person3.jpg";

import landscape1 from "../../assets/landscape1.jpeg";
import landscape2 from "../../assets/landscape2.jpeg";
import landscape3 from "../../assets/landscape3.jpeg";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([
    {
      name: "Josh",
      selfie: random_person1,
      personalFeed: landscape1,
      postName: "some_landscape",
    },
    {
      name: "Rebeca",
      selfie: random_person2,
      personalFeed: landscape2,
      postName: "some_landscape",
    },
    {
      name: "Samanta",
      selfie: random_person3,
      personalFeed: landscape3,
      postName: "some_landscape",
    },
  ]);

  const addFriend = (one) => {
    setFriends([...friends, one]);
  };

  const removeFriend = (one) => {
    const newFriendsList = friends.filter((elt) => elt.name !== one.name);
    setFriends(newFriendsList);
  };

  return (
    <FriendsContext.Provider
      value={{
        friends,
        setFriends,
        addFriend,
        removeFriend,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);
