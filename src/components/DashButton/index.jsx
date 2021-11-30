import { useFriends } from "../../Providers/Friends/friends";
import { useCandidates } from "../../Providers/Candidates/candidates";

const DashButton = ({ elt, type }) => {
  const { addFriend, removeFriend } = useFriends();
  const { addCandidate, removeCandidate } = useCandidates();

  const text = type === "sugestionslist" ? "Seguir" : "Excluir amizade";

  const handleClick = () => {
    if (type === "sugestionslist") {
      addFriend(elt);
      removeCandidate(elt);
    } else {
      removeFriend(elt);
      addCandidate(elt);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default DashButton;
