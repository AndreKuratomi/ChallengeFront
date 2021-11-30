import { users } from "../../assets/users";
import UsersPosts from "../UsersPosts";

import { FeedCont } from "./styles";

const FeedContent = () => {
  return (
    <FeedCont>
      {users.map((elt, index) => (
        <UsersPosts elt={elt} index={index} />
      ))}
    </FeedCont>
  );
};
export default FeedContent;
