import { useUser } from "../../Providers/Users/users";

const DashButton = ({ one, type }) => {
  const { addUser, removeFriend } = useUser();

  const text = type === "sugestionslist" ? "Seguir" : "Excluir amizade";

  const handleClick = () => {
    if (type === "sugestionslist") {
      addUser(one);
    } else {
      removeFriend(one);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default DashButton;
