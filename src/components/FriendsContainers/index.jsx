import UsersList from "../UsersList";

import { FeedCont } from "./styles";

const FriendsContainers = () => {
  return (
    <FeedCont>
      <UsersList type="friendsposts" />
    </FeedCont>
  );
};

export default FriendsContainers;
