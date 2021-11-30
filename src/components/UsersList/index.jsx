import { useFriends } from "../../Providers/Friends/friends";
import { useCandidates } from "../../Providers/Candidates/candidates";

import FriendsCards from "../FriendsCards";
import SugestionsCards from "../SugestionsCards";
import FriendsPosts from "../FriendsPosts";

const UsersList = ({ type }) => {
  const { friends } = useFriends();
  const { candidates } = useCandidates();

  return (
    <>
      {type === "socialnet" &&
        friends.map((elt, index) => <FriendsCards elt={elt} index={index} />)}
      {type === "friendsposts" &&
        friends.map((elt, index) => (
          <FriendsPosts elt={elt} index={index} type={type} />
        ))}
      {type === "sugestionslist" &&
        candidates.map((elt, index) => (
          <SugestionsCards elt={elt} index={index} type={type} />
        ))}
    </>
  );
};

export default UsersList;
