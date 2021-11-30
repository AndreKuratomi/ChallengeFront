import { friends, candidates } from "../../assets/users";

import FriendsCards from "../FriendsCards";
import SugestionsCards from "../SugestionsCards";
import FriendsPosts from "../FriendsPosts";

const UsersList = ({ type }) => {
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
