import UsersList from "../UsersList";

import { Section, List } from "./styles";

const SugestionsList = () => {
  return (
    <Section>
      <h1>Sugestões para você</h1>
      <List>
        <UsersList type="sugestionslist" />
      </List>
    </Section>
  );
};

export default SugestionsList;
